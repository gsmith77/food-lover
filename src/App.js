import React, { Component } from 'react';import './App.css';
import BusinessesContainer from './containers/BusinessesContainer'
import FeaturedEventContainer from './containers/FeaturedEventContainer'
import User from './components/users/user'

class App extends Component{


  render(){

    return (
      <div className="App">
        <BusinessesContainer />
        <FeaturedEventContainer />
        <User />
      </div>
    );
  }
}

export default App;
