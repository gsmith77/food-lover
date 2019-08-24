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
                <li align="left" key={business.id}>
                    <h4>{business.name}</h4>
                    <img style={{align: 'left', width: '500px'}}alt="single business" id={business.name} src={business.image_url}></img>
                    <br/>
                    <section>
                    Price: {business.price}
                    <br/>
                    Total Reviews:{business.review_count}
                    <br/>
                    Categories: {business.categories.map(c => <ul> - {c.title}</ul>)} 
                    <br/>                
                    </section>
                    <br/>
                    <button style={buttonStyle} onClick={this.handleClick}>Reviews</button>
                    <ReviewsContainer business={business}/>
                </li>
            </div>
        )
    }
}

export default Business