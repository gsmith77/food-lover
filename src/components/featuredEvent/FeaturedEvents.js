import React, {Component} from 'react'

class FeaturedEvents extends Component {    

    
    
    render(){
        const listStyle={align: 'left', width: '500px'}
        const renderEvents = () => {
            return this.props.events.map(event =>{
                if(typeof event.name === "string"){
                    return(
                        <li style={listStyle}>
                            <h2>{event.name}</h2>
                            <img alt="no image" src={event.image_url}></img>
                            <p>            
                                {event.attending_count} guest(s) are attending
                                {'\n'}
                                {event.description}
                            </p>
                            <p>From {event.time_start} to {event.time_end}</p>
                        </li>
                        )
                    }
                    else{
                        return(
                            <div></div>
                        )
                    }
                }
            )
        }
        return(
            <div>{renderEvents()}</div>
        )
    }
    
}

export default FeaturedEvents