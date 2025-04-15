import { convertTime } from '../utils/convertTime.js';
import { convertWeatherCode } from '../utils/convertWeatherCode.js';
import { handleScroll } from '../handlers/handleScroll.js';

export const createWeatherDom = (day, hourlyWeather) => {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('day');
    dayDiv.innerHTML = `
              <h2>${day}</h2> 
              <div class="title">
                     <h3>Time</h3>
                     <h3>Temperature</h3>
              </div>`;

    dayDiv.addEventListener('scroll', (e) => handleScroll(e));

    hourlyWeather.forEach((weather, i) => {
        const hourlyDiv = document.createElement('div');
        hourlyDiv.classList.add('hourly');

        const time = convertTime(i);
        const code = convertWeatherCode(weather.code);

        hourlyDiv.innerHTML = `
              <p>${time}</p>
              <p>${code} ${weather.temperature}°C</p> 
              `;

        dayDiv.append(hourlyDiv);
    });

    return dayDiv;
};
