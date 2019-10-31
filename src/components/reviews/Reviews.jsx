import React, {Component} from 'react';
import AddReviewInput from './addReviewInput';
import { connect } from 'react-redux';

class Reviews extends Component {


    //do shouldComponentUpdate() due to new state with recently
    //added review.

    render(){
        const thisBusinessesReviews = () => {
            let newProps = this.props.reviews.filter(review => { 
                return (review.business_id === this.props.business.id)})
            return newProps
        }
        
        const renderReviews = () => {
            return(
                    <ul id="business-reviews">
                        {thisBusinessesReviews().map(review => {
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
                                )}
                            )
                        }
                    </ul>
                )
            }
            


           return(
                <div className="reviews">
                    {renderReviews()}
                    <AddReviewInput reviews={thisBusinessesReviews()} business={this.props.business}/>
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