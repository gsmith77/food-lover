import React, {Component} from 'react'
import './eventForm.css'
import { fetchEvents } from '../../actions/fetchEvents'
import { connect } from 'react-redux'

export class featuredEventInput extends Component {
    constructor(){
        super()
        this.state={
            location: '',
            date: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.fetchEvents(this.state)
        this.setState({
            location: '',
            date: ''
        })
    }

    render(){
        return(
            <div className="event-input-form">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="zipcode-label">Enter Your Zip Code, City or State to find The Featured Events Near You!</h2>
                    <br/>
                    <br/>
                    <label className="location-label">Location:</label>
                    <input className="location-inputbox" type="text" name="location" value={this.state.location} onChange={this.handleChange}/>
                    <label className="date-label">Date:</label>
                    <input className="date-inputbox" type="text" name="date" value={this.state.data} onChange={this.handleChange}/>
                    <br/>
                    <input className="submit-button" type="submit"/>
                </form>
            </div>
        )
    }
};

export default connect(null, {fetchEvents})(featuredEventInput)

