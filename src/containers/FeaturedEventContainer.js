import React, {Component} from 'react'
import FeaturedEvent from '../components/featuredEvent/FeaturedEvent'
import { connect } from 'react-redux'

class FeaturedEventContainer extends Component{

    render(){
        return(
            <div>
                <FeaturedEvent event={this.props.event}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        event: state.event.event
    }
}

export default connect(mapStateToProps)(FeaturedEventContainer)

