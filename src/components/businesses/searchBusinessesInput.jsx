import React, {Component} from 'react'
import './Input.css'
import { fetchBusinesses } from '../../actions/fetchBusinesses'
import { connect } from 'react-redux'
const initialState = {
    term: '',
    location: ''
}

export class SearchBusinessesInput extends Component {
    constructor(props){
        super(props)
        this.state={
            term: '',
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
        this.props.fetchBusinesses(this.state)
        this.setState(initialState)
    }

    render(){

        return(
     
            <div className="input">
                <form onSubmit={this.handleSubmit} className="search-businesses-input">
                    <h1> PUT A TITLE HERE FOR SEARCHING FOODS</h1>
                    <h2 className="looking-for-header">What Are You Looking For?</h2>
                    <input className="looking-for-inputbox" type="text" name="term" value={this.state.term} onChange={this.handleChange}/>
                    <br/>
                    <h2 className="location-header">Location:</h2>
                    <input className="location-inputbox" type="text" name="location" value={this.state.location} onChange={this.handleChange}/>
                    <br/>
                    <br/>
                    <br/>
                    <input className="submit-button" type="submit"/>
                </form>
            </div>
        )
    }
};

export default connect(null, {fetchBusinesses})(SearchBusinessesInput)

