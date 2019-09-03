import React, {Component} from 'react'

export default class Reviews extends Component {

    render(){
        const thisBusinessesReviews = () => {
            let newProps = this.props.reviews.filter(review => { return (review.businessId === this.props.business.id)})
            return newProps
        }

        const renderReviews = () => {
            return thisBusinessesReviews().map(review => {
                    return(
                        <React.Fragment>
                            <li style={{width: '300px'}} key={review.id}>
                                <h4>{review.user.name}</h4>
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
                <div id="listOfReviews">
                    {renderReviews()}
                </div>
           )

    }
}