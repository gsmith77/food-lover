import './user.css'
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../../actions/loginUser';

class Login extends Component {
    constructor(){
        super()
        this.state = {
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
    this.props.loginUser(this.state)
    this.setState({
        email:'',
        password: ''
    })
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
          <h1 className="login-header">Login</h1>

          <label>Email</label>
          <input
            name='email'
            placeholder='Email'
            value={this.state.email}
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

          <input type='submit' value='Log In'/>
        </form>
      </div>
    )
  }
}

export default connect(null, {loginUser})(Login);
