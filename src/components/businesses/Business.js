import React, {Component} from 'react'
import ReviewsContainer from '../../containers/ReviewsContainer'

class Business extends Component {

    handleClick = (event) => {
        event.preventDefault()
        this.props.fetchReviews({id: this.props.business.id})
    }
    render(){
        const buttonStyle ={padding: '15px 32px',
            textalign: 'center',
            display: 'inline-block',
            fontsize: '16px'}
        const business = this.props.business
        return(
            <div>
                <li align="left">
                    <h4>{business.name}</h4>
                    <img style={{align: 'left', width: '500px'}}alt="single business" id={business.name} src={business.image_url}></img>
                    <br/>
                    <button style={buttonStyle} onClick={this.handleClick}>Reviews</button>
                    <ReviewsContainer business={business}/>
                </li>
            </div>
        )
    }
}

export default Business