import { formatData } from "./dataFormat.js";

const cityName = document.getElementById('city-name');
const frontTemp = document.getElementById('front-temp');
const timeDisplay = document.getElementById('time');
const tempDisplay = document.getElementById('back-temp');
const feelsLikeDisplay = document.getElementById('feels-like');
const conditionsDisplay = document.getElementById('conditions');
const input = document.getElementById('city-input');
const displayButton = document.getElementById('display-button');
const unitToggle = document.getElementById('unit-toggle');

let unitSystem = 'metric';

async function domDisplay(city, unitSystem) {
    try {
        const unit = unitSystem === 'metric' ? 'C' : 'F';
        const conditionsData = await formatData(city, unitSystem);
        cityName.innerHTML = await city.replaceAll('-', ' ');
        frontTemp.innerHTML = await `${conditionsData.temp} &deg${unit}`;
        timeDisplay.innerHTML = await `Time: ${conditionsData.time}`;
        tempDisplay.innerHTML = await `Temperature: ${conditionsData.temp} &deg${unit}`;
        feelsLikeDisplay.innerHTML = await `Feels like: ${conditionsData.feelsLike} &deg${unit}`;
        conditionsDisplay.innerHTML = await `Current conditions: ${conditionsData.conditions}`;
        return;
    } catch (error) {
        console.log(error);
    }
}

function displayCity() {
    const cityInput = input.value;
    let array = cityInput.split(' ');
    let formattedCity = array.join('-').toLowerCase();
    domDisplay(formattedCity, unitSystem);
    return;
}

function toggleUnitSytem() {
    if (unitSystem === 'metric') {
        unitSystem = 'us';
    } else if (unitSystem === 'us') {
        unitSystem = 'metric';
    }

    return unitSystem;
}


displayButton.addEventListener('click', displayCity);

unitToggle.addEventListener('click', () => {
    let unit = toggleUnitSytem();
    displayCity(unit);
})

export { domDisplay };