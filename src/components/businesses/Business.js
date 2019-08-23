import React, {Component} from 'react'
import ReviewsContainer from '../../containers/ReviewsContainer'

class Business extends Component {

    handleClick = (event) => {
        event.preventDefault()
        this.props.fetchReviews({id: this.props.business.id})
    }
    render(){
        const business = this.props.business
        return(
            <div>
                <li align="left">
                    <h4>{business.name}</h4>
                    <img alt="single business" id={business.name} src={business.image_url}></img>
                    <button onClick={this.handleClick}>Reviews</button>
                    <ReviewsContainer business={business}/>
                </li>
            </div>
        )
    }
}

export default Business