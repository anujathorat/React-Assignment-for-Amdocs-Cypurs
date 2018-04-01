import {combineReducers} from 'redux';
import inputActionReducer from './inputActioReducer';
import customCardDataReducer from './customCardDataReducer';
import initDataReducer from './initDataReducer';

const allReducer = combineReducers({
    initData:initDataReducer,
    inputValue:inputActionReducer,
    customCardDataReducer:customCardDataReducer
});

export default allReducer;