import { fetchData } from "./retrieveData.js";

async function formatData() {
    try {
        const data = await fetchData();
        console.log(data.currentConditions);
        const temp = await data.currentConditions.temp;
        const feelsLike = await data.currentConditions.feelslike;
        const conditions = await data.currentConditions.conditions;
        console.log(temp, feelsLike, conditions);
        
        return { temp, feelsLike, conditions }
    } catch (error) {
        console.log(error);
    }


}

export { formatData };