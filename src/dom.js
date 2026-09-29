import { formatData } from "./dataFormat.js";

const timeDisplay = document.getElementById('time');
const tempDisplay = document.getElementById('temp');
const feelsLikeDisplay = document.getElementById('feels-like');
const conditionsDisplay = document.getElementById('conditions');
const input = document.getElementById('city-input');
const displayButton = document.getElementById('display-button');

async function domDisplay(city) {
    try {
        const conditionsData = await formatData(city);
        timeDisplay.innerHTML = await `Time: ${conditionsData.time}`;
        tempDisplay.innerHTML = await `Temperature: ${conditionsData.temp} &degC`;
        feelsLikeDisplay.innerHTML = await `Feels like: ${conditionsData.feelsLike} &degC`;
        conditionsDisplay.innerHTML = await `Current conditions: ${conditionsData.conditions}`;
        return;
    } catch(error) {
        console.log(error);
    }
}


displayButton.addEventListener('click', () => {
    const cityInput = input.value;
    let array = cityInput.split(' ');
    let formattedCity = array.join('-').toLowerCase();
    domDisplay(formattedCity);
});

export { domDisplay };