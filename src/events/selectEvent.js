import dom from '../dom.js';
import { handleSelect } from '../handlers/handleSelect.js';

const selectEvent = () => {
    dom.selector.addEventListener('change', (e) => handleSelect(e));
};

export default selectEvent;
