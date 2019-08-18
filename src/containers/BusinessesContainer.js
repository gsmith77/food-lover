import React, {Component} from 'react'
import SearchBusinessesInput from '../components/businesses/searchBusinessesInput'
import Businesses from '../components/businesses/Businesses'
import { connect } from 'react-redux'

class BusinessesContainer extends Component {

    render(){
        return(
            <div>
                <SearchBusinessesInput />
                <Businesses businesses={this.props.businesses}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        businesses: state.businesses.businesses
    }
}

export default connect(mapStateToProps)(BusinessesContainer)