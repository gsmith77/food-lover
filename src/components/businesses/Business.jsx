import React, {Component} from 'react'
import ReviewsContainer from '../../containers/ReviewsContainer'
import { connect } from 'react-redux'
import { fetchReviews } from '../../actions/fetchReviews'

class Business extends Component {

    handleClickRevealReviews = (event) => {
        event.preventDefault();
        this.refs.btn.setAttribute('disabled', 'disabled')
        this.props.fetchReviews({id: this.props.business.id, name: this.props.business.name})
    }

    render(){
        const buttonStyle = {
            padding: '15px 32px',
            textalign: 'center',
            display: 'inline-block',
            fontsize: '16px'
        }
        const business = this.props.business
        return(
            <React.Fragment>
                <li align="left" key={business.id}>
                    <h4>{business.name}</h4>
                    <img style={{align: 'left', width: '500px'}} alt="single business" id={business.name} src={business.image_url}></img>
                    <br/>
                    <section>
                    Price: {business.price}
                    <br/>
                    Total Reviews:{business.review_count}
                    <br/>
                    
                    Categories: {business.categories.map(c => <ul key={c.id}> - {c.title}</ul>)} 
                    <br/>                
                    </section>
                    <br/>
                    <button ref="btn" id="display-reviews-btn" style={buttonStyle} onClick={this.handleClickRevealReviews}>Reviews</button>
                    <ReviewsContainer business={business}/>
                </li>
            </React.Fragment>
        )
    }
}

export default connect(null, {fetchReviews})(Business)