import React, {Component} from 'react'
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
        console.log('A');
        this.props.fetchBusinesses(this.state)
        console.log('B');
        this.setState(initialState)
    }

    render(){
        var divStyle={position:'relative',
            bottom: '-30px'}
        return(
     
            <div className="input" style={divStyle}>
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

