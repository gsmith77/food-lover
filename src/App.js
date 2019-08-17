import React, { Component } from 'react';import './App.css';
import Businesses from './containers/Businesses'

class App extends Component{

  render(){
    return (
      <div className="App">
        <Businesses />
      </div>
    );
  }
}

export default App;
