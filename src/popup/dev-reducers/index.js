import { combineReducers } from 'redux';

import domContent from './domContent';
import config from './config';

export default combineReducers({
    domContent,
    config
});
