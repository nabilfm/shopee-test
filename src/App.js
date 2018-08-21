import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './App.css';
import configureStore from './main/store/configureStore';
import Main from "./main/main";
import { PersistGate } from 'redux-persist/es/integration/react';

const {store,persistor} = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Main/>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
