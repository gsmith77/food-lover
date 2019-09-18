import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createUser} from '../../actions/createUser';

class Signup extends Component {
    constructor(){
        super()
        this.state = {
          username: "",
          password: ""
        }
    }
    
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.createUser(this.state)
    this.setState({
        username: '',
        password: ''
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>Username</label>
        <input
          name='username'
          placeholder='Username'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <input type='submit' value="Sign Up"/>
      </form>
    )
  }
}

export default connect(null, {createUser})(Signup);