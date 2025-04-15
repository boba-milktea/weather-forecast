import handleLoad from '../handlers/handleLoad.js';

const loadEvent = () => {
    window.addEventListener('load', handleLoad);
};

export default loadEvent;
