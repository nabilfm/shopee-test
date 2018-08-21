import {createStore, compose, applyMiddleware} from 'redux';
import rootReducers from '../reducers/index';
import thunk from 'redux-thunk';

const middleware = [];
middleware.push(thunk);
const enhancers = [applyMiddleware(...middleware)];
const configureStore = createStore(rootReducers, undefined, compose(...enhancers));

export default configureStore