import React, {Component} from 'react'

export default class Reviews extends Component {

    render(){

        const thisBusinessesReviews = () => {
            return this.props.reviews.filter(review => review.businessId === this.props.business.id)
        }

        const renderReviews = () => {
            return thisBusinessesReviews().map(review => 
                <li>
                    <h4>{review.user.name}</h4>
                    {"\n"}
                    <p>{review.rating}</p>
                    {"\n"}
                    <p>{review.text}</p>
                </li>
            )
        }

        return(
            <div>
                {renderReviews()}
            </div>
        )
    }
}