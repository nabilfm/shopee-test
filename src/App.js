import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './App.css';
import store from './main/store/configureStore';
import Main from "./main/main";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

export default App;
