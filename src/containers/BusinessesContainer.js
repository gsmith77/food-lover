import React, {Component} from 'react'
import Businesses from '../components/businesses/Businesses'
import { fetchReviews } from '../actions/fetchReviews'
import { connect } from 'react-redux'

class BusinessesContainer extends Component {

    render(){
        return(
            <div>
                <Businesses businesses={this.props.businesses} fetchReviews={this.props.fetchReviews}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        businesses: state.businesses.businesses
    }
}



export default connect(mapStateToProps, {fetchReviews})(BusinessesContainer)