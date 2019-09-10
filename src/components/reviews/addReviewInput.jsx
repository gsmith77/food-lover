import React, {Component} from 'react'
import {postReview} from '../../actions/postReview'

export default class AddReviewInput extends Component {
    constructor(){
        super()
        this.state = {
          text:''
        }
      }
  
      handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
      }
  
      handleSubmit = (event) => {
        event.preventDefault()
        postReview(this.state.text)
        this.setState({
          text: ''
        })
      }
      
      render(){
        return(
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
          <label>Leave Review</label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
          <input type="submit" value="Add Review"/>
          </form>
        </React.Fragment>
        )
      }
  
}