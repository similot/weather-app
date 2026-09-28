import { formatData } from "./dataFormat.js";

const container = document.getElementById('container');
const tempDisplay = document.getElementById('temp');
const feelsLikeDisplay = document.getElementById('feels-like');
const conditionsDisplay = document.getElementById('conditions');

async function domDisplay() {
    try {
        const conditionsData = await formatData();
        tempDisplay.innerHTML = await `Temperature: ${conditionsData.temp} &degC`;
        feelsLikeDisplay.innerHTML = await `Feels like: ${conditionsData.feelsLike} &degC`;
        conditionsDisplay.innerHTML = await `Current conditions: ${conditionsData.conditions}`;
        return;
    } catch(error) {
        console.log(error);
    }
}

export { domDisplay };