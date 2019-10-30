import React, {Component} from 'react';
import AddReviewInput from './addReviewInput';
import { connect } from 'react-redux';

class Reviews extends Component {

    render(){
        const thisBusinessesReviews = () => {
            let newProps = this.props.reviews.filter(review => { 
                return (review.business_id === this.props.business.id)})
            return newProps
        }
        
        const renderReviews = () => {
            return thisBusinessesReviews().map(review => {
                
                    return(
                        <React.Fragment key={review.id}>
                            <li style={{width: '300px'}} key={review.id}>
                                <h4>{review.user ? review.user.name : review.user_name}</h4>
                                {"\n"}
                                <p>Rating: {review.rating}</p>
                                {"\n"}
                                <p>{review.text}</p>
                            </li>
                        </React.Fragment>
                    )
                }
            )
        }


           return(
                <div id="reviews">
                    {renderReviews()}
                    <AddReviewInput business={this.props.business}/>
                </div>
           )

    }
}

const mapStateToProps = state => {
    return{
        businesses: state.businesses.businesses,
        reviews: state.businesses.reviews
    }
}

export default connect(mapStateToProps)(Reviews);