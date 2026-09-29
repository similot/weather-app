import { fetchData } from "./retrieveData.js";

async function formatData(city) {
    try {
        const data = await fetchData(city);
        console.log(data.currentConditions);
        const time = await data.currentConditions.datetime;
        const temp = await data.currentConditions.temp;
        const feelsLike = await data.currentConditions.feelslike;
        const conditions = await data.currentConditions.conditions;
        // console.log(temp, feelsLike, conditions);

        return { time, temp, feelsLike, conditions }
    } catch (error) {
        console.log(error);
    }


}

export { formatData };