/**
 * ************************************
 *
 * @module  index.js
 * @author  Alexis Smith & Brit Lim & Philip Yoo
 * @date 1/3/2022
 * @description A place to combine reducers
 *
 * ************************************
 */
 import { combineReducers } from 'redux';
 import visualReducer from './visualReducer';
 
 
 const reducers = combineReducers({
  visual: visualReducer
 });
 
 export default reducers;