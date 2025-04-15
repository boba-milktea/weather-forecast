export const getData = async (range) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=50.81&longitude=4.44&hourly=temperature_2m,weather_code&timezone=auto&forecast_days=${range ? range : 10}`;

    try {
        const res = await fetch(url);
        if (res.status !== 200) {
            throw new Error(`Response status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (e) {
        console.error(e.message);
        return null;
    }
};
