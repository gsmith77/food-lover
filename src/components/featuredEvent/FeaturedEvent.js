import React, {Component} from 'react'

class FeaturedEvent extends Component {
    

    render(){
        
        return(
            <p>            
                {this.props.event.description}
            </p>
        )
    }
}

export default FeaturedEvent