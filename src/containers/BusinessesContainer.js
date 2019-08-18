import React, {Component} from 'react'
import SearchBusinessesInput from '../components/businesses/searchBusinessesInput'
import Businesses from '../components/businesses/Businesses'
import { fetchBusinesses } from '../actions/fetchBusinesses'
import { fetchReviews } from '../actions/fetchReviews'
import { connect } from 'react-redux'

class BusinessesContainer extends Component {

    render(){
        return(
            <div>
                <SearchBusinessesInput fetchBusinesses={this.props.fetchBusinesses}/>
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



export default connect(mapStateToProps, {fetchBusinesses, fetchReviews})(BusinessesContainer)