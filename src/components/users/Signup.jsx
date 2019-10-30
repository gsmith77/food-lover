import React, {Component} from 'react';
import './user.css'
import {connect} from 'react-redux';
import {createUser} from '../../actions/createUser';

class Signup extends Component {
    constructor(){
        super()
        this.state = {
          first_name: '',
          last_name: '',
          email: "",
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
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    });
  }

  render() {
    return (
      <div className="signup-form">
      <h1 className="signup-header">Sign Up For An Account</h1>
        <form onSubmit={this.handleSubmit}>
      
          <label className="first-name-label">First Name</label>
          <input 
            className="first-name-inputbox"
            name='first_name'
            placeholder='First Name'
            value={this.state.first_name}
            onChange={this.handleChange}
            /><br/>

          <label className="last-name-label">Last Name</label>
          <input 
            className="last-name-inputbox"
            name='last_name'
            placeholder='Last Name'
            value={this.state.last_name}
            onChange={this.handleChange}
            /><br/>

          <label className="email-label">Email</label>
          <input 
            className="email-inputbox"
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
            /><br/>

          <label className="password-label">Password</label>
          <input 
            className="password-inputbox"
            type='password'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleChange}
            /><br/>

          <input className="submit-button" type='submit' value="Sign Up"/>
        </form>
      </div>
    )
  }
}

export default connect(null, {createUser})(Signup);