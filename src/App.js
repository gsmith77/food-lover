import React, { Component } from 'react';import './App.css';
import BusinessesContainer from './containers/BusinessesContainer'
import FeaturedEventContainer from './containers/FeaturedEventContainer'
import User from './components/users/user'
import {connect} from 'react-redux'

export class App extends Component{


  render(){

    return (
      <div className="App">
        <BusinessesContainer />
        <FeaturedEventContainer />
        {this.props.currentUser ? <User currentUser={this.props.currentUser}/> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      currentUser: state.user.currentUser}
}

export default connect(mapStateToProps)(User)
