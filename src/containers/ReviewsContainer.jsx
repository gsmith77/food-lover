import React, {Component} from 'react'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {
    
    render(){
        return(
            <div>
                <ol id="allReviews" style={{borderTop: "3px solid rgb(100, 100, 100)",borderBottom: "3px solid rgb(100, 100, 100)"}}>
                    <Reviews business={this.props.business} reviews={this.props.reviews} />
                </ol>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        reviews: state.businesses.reviews
    }
}

export default connect(mapStateToProps)(ReviewsContainer)