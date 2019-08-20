import React, {Component} from 'react'
import { fetchEvents } from '../../actions/fetchEvents'
import { connect } from 'react-redux'

export class featuredEventInput extends Component {
    constructor(){
        super()
        this.state={
            location: ''
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
            location: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter Your Zip Code, City or State to find The Featured Event Near You!</label>
                    <label>Location:</label>
                    <input type="text" name="location" value={this.state.location} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
};

export default connect(null, {fetchEvents})(featuredEventInput)

