async function fetchData() {
    try {
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/cape-town?unitgroup=metric&key=J7ZHCR3JYPZMX4XKYGKGZE5QT');

        console.log(await response.json());
    }

    catch(error) {
        console.log(error);
    }

}

fetchData();