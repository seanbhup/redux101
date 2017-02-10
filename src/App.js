import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReduxStyle from "./containers/ReduxStyle.js"

class App extends Component {
  render() {
    return (
        <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo2" alt="logo" />
            <img src={logo} className="App-logo3" alt="logo" />
            <ReduxStyle/>
        </div>
    );
  }
}

export default App;
