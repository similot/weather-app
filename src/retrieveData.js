async function fetchData() {
    try {
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/bulawayo?unitGroup=metric&key=J7ZHCR3JYPZMX4XKYGKGZE5QT');

        const data = await response.json();

        // console.log(data);

        return data;
    }

    catch(error) {
        console.log(error);
    }

}

export { fetchData };