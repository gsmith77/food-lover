import React, { Component } from 'react';import './App.css';
import BusinessesContainer from './containers/BusinessesContainer'

class App extends Component{

  render(){
    return (
      <div className="App">
        <BusinessesContainer />
      </div>
    );
  }
}

export default App;
