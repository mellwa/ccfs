import React, { Component } from 'react';
import './App.css';
import './AppBody';
import Login from './login/Login'
import AppBody from "./AppBody";

class App extends Component {



  render() {
      var logoName='CCFS 赋盛教育';
    return (
      <div className="App">
        <div className="App-header">
            <h2 id='app-title'>{logoName}</h2>
            <Login/>
        </div>
          <div className="App-body">
            <AppBody/>
          </div>
      </div>
    );
  }
}

export default App;
