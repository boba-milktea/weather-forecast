import { getData } from '../apis/api.js';
import { groupByDay } from '../utils/groupByDay.js';
import { renderWeather } from './handleRender.js';
import selectEvent from '../events/selectEvent.js';

const handleLoad = async () => {
    const data = await getData();
    const dailyWeather = groupByDay(data.hourly);
    renderWeather(dailyWeather);

    selectEvent();
};

export default handleLoad;
