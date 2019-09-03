import React, {Component} from 'react'

export default class AddReviewInput extends Component {
    constructor(){
        super()
        this.state = {
          text:'',
          inputs: []
        }
      }
  
      handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
      }
  
      handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
          inputs: [...this.state.inputs, this.state.text]
        })
      }
      
      render(){
        return(
        <React.Fragment>
          <form onSubmit={this.handleSubmit}>
            <label>Leave Review</label>
          <input type="text" name="text" value={this.state.text} onChange={this.handleChange}/>
          <input type="submit" value="Add Review"/>
          </form>
          <ul>
            {this.state.inputs.map(input => <li >{input}</li>)}
          </ul>
        </React.Fragment>
        )
      }
  
}