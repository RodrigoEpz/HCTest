import { combineReducers } from 'redux';
import { cars } from './carsReducer'
import { alert } from './alertReducer'




const rootReducer = 
combineReducers({
//cars,
alert
});

export default rootReducer;