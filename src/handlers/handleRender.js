import { createWeatherDom } from '../components/weather.js';
import dom from '../dom.js';

export const renderWeather = (dailyWeather) => {
    dom.container.innerHTML = '';

    for (const [day, hourlyWeather] of Object.entries(dailyWeather)) {
        const weatherDom = createWeatherDom(day, hourlyWeather);
        dom.container.append(weatherDom);
    }
};
