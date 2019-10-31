import React, {Component} from 'react'
import {postReview} from '../../actions/postReview'
import { connect } from 'react-redux';
import NumericInput from 'react-numeric-input';
import { fetchReviews } from '../../actions/fetchReviews'

class AddReviewInput extends Component {
  constructor(props){
      super(props)
      this.state = {
        text:'',
        rating: 1,
        business: this.props.business
      }
    }

    handleClickRevealReviews = () => {
      document.getElementById('display-reviews-btn').disabled = false
      document.getElementById('business-reviews').innerHTML = ""
      this.props.fetchReviews({id: this.props.business.id, name: this.props.business.name})
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
      this.props.postReview(this.state, this.props.reviews)
      try{
        const newReview = {first_name: this.state.user.first_name, last_name: this.state.user.last_name, text: this.state.text, rating: this.state.rating}
        this.props.reviews.unshift(newReview)
      }
      catch{
      }
      //add new review to front of reviews
      this.setState({
        text: '',
        rating: 1
      })
      //reset components' state
      //needs to make reviews update now dynamically on page
    }
    
    render(){
      return(
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label>Leave Review</label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
          <NumericInput min={1} max={5} name="rating" value={this.state.rating} onChange={this.changeRating}/>
          <input type="submit" onClick={event => this.handleClickRevealReviews()} value="Add Review"/>
        </form>
      </React.Fragment>
      )
    }
}

export default connect(null, {postReview, fetchReviews})(AddReviewInput)
