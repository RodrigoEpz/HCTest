import { combineReducers } from 'redux';
import { cars } from './carsReducer'
import { alert } from './alertReducer'
import {common} from './commonReducer'




const rootReducer = 
combineReducers({
cars,
alert,
common
});

export default rootReducer;