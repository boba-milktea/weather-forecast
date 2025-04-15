export const groupByDay = (data) => {
    const groupedDataObj = {};
    for (let i = 0; i < data.time.length; i++) {
        const day = data.time[i].slice(0, 10);
        if (!groupedDataObj[day]) {
            groupedDataObj[day] = [
                {
                    temperature: data.temperature_2m[i],
                    code: data.weather_code[i]
                }
            ];
        } else {
            groupedDataObj[day].push({
                temperature: data.temperature_2m[i],
                code: data.weather_code[i]
            });
        }
    }
    return groupedDataObj;
};
