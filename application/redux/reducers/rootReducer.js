import { combineReducers } from 'redux';
import dashboard from './DashboardReducer';
import newCard from './NewCardReducer';

const rootReducer = combineReducers({
    dashboard,
    newCard,
});

export default rootReducer;