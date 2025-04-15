import { getData } from '../apis/api.js';
import { groupByDay } from '../utils/groupByDay.js';
import { renderWeather } from './handleRender.js';

export const handleSelect = async (e) => {
    const dayRange = e.target.value;
    const data = await getData(dayRange);
    const dailyWeather = groupByDay(data.hourly);
    renderWeather(dailyWeather);
};
