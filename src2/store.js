/**
 * ************************************
 *
 * @module  store.js
 * @author Alexis Smith & Brit Lim
 * @date 1/3/2022
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

 import {createStore, applyMiddleware} from 'redux';
 import thunk from 'redux-thunk';
 import { composeWithDevTools } from 'redux-devtools-extension';
 
 const middlewareEnhancer = applyMiddleware(thunk);
 const enhancers = [middlewareEnhancer];
 const composedEnhancers = composeWithDevTools(...enhancers);
 
 import reducers from './reducers/index';
 
 const store = createStore(reducers, composedEnhancers);
 
 export default store;