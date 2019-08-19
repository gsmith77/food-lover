import React, { Component } from 'react';import './App.css';
import BusinessesContainer from './containers/BusinessesContainer'
import FeaturedEventContainer from './containers/FeaturedEventContainer'

class App extends Component{

  render(){
    return (
      <div className="App">
        <BusinessesContainer />
        <FeaturedEventContainer />
      </div>
    );
  }
}

export default App;
