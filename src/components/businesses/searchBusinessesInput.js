import { fetchBusinesses } from '../businesses/fetchBusinesses'
import React, {Component} from 'react'
import { connect } from 'react-redux'

const initialState = {
    term: '',
    location: '',
    limit: 20
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>What Are You Looking For?</label>
                    <input type="text" name="term" value={this.state.term} onChange={this.handleChange}/>
                    {"\n"}
                    <label>Location:</label>
                    <input type="text" name="location" value={this.state.location} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
};

export default connect(null, {fetchBusinesses})(SearchBusinessesInput)

