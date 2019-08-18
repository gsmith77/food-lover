import React, {Component} from 'react'

export default class Business extends Component {
    render(){
        const business = this.props.business
        return(
            <div>
                <li align="left">
                    <h4>{business.name}</h4>
                    <img alt="single business" id={business.name} src={business.image_url}></img>
                </li>
            </div>
        )
    }
}