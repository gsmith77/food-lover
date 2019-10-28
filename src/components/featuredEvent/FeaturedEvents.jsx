import React, {Component} from 'react'


Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
if(!Date.now) Date.now = function() { return new Date(); }
Date.time = function() { return Date.now().getUnixTime(); }

class FeaturedEvents extends Component { 
    
    

    render(){

        const listStyle={align: 'left', width: '500px'}
        let amOrPm = 'AM'

        const checkAmOrPm = (hours) => {
            if(hours > 12){
                amOrPm = 'PM'
                return hours - 12
            }
            else if(hours === 12){
                amOrPm = 'PM'
                return hours
            }
            else{
                amOrPm = 'AM'
                return hours
            }
        }

        const addZeroForSingleMinutes = (minutes) => {return minutes < 10 ? '0' + minutes: minutes}

        const renderEvents = () => {
            return this.props.events.map(event =>{
                let startTime = new Date(event.time_start)
                let startTimeHours = startTime.getHours();
                let startTimeMinutes = startTime.getMinutes();
                let endTime = new Date(event.time_end)
                let endTimeHours = endTime.getHours();
                let endTimeMinutes = endTime.getMinutes();

                if(typeof event.name === "string"){
                    return(
                        <li style={listStyle} key={event.id}>
                            <h2>{event.name}</h2>
                            <img alt="See your Event Live!" src={event.image_url}></img>
                            <p>            
                                {event.attending_count} guest(s) are attending
                                {'\n'}
                                {event.description}
                            </p>
                            
                            <p>From {checkAmOrPm(startTimeHours)}:{addZeroForSingleMinutes(startTimeMinutes)} {amOrPm} to {checkAmOrPm(endTimeHours)}:{addZeroForSingleMinutes(endTimeMinutes)} {amOrPm}</p>
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