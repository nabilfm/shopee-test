import {createStore, compose, applyMiddleware} from 'redux';
import __dev__ from 'react';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import { createLogger } from 'redux-logger';
import rootReducers from '../reducers/index';
import storage from 'redux-persist/lib/storage'

const config = {
  key: 'root',
  storage,
  debug: __dev__
};

const middleware = [];
middleware.push(thunk);
if (__dev__) { middleware.push(createLogger()); }

const reducers = persistReducer(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, ()=>{
  if (__dev__) {
    console.log(store.getState())
  }
});

const configureStore = () => {
  return {
    persistor, store
  }
};

export default configureStore