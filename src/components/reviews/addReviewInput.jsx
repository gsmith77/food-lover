import React, {Component} from 'react'
import {postReview} from '../../actions/postReview'
import { connect } from 'react-redux';
import NumericInput from 'react-numeric-input';

class AddReviewInput extends Component {
  constructor(props){
      super(props)
      this.state = {
        text:'',
        rating: 1,
        business: this.props.business
      }
    }

    handleChange = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
    }

    changeRating = (newRating) => {
      this.setState({
        rating: newRating
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      //grab currentuser from localstorage
      this.props.postReview(this.state)
      this.setState({
        text: '',
        rating: 1
      })
    }
    
    render(){
      return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>Leave Review</label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
          <NumericInput min={1} max={5} name="rating" value={this.state.rating} onChange={this.changeRating}/>
          <input type="submit" value="Add Review"/>
        </form>
      </React.Fragment>
      )
    }
}

export default connect(null, {postReview})(AddReviewInput)
