import React, {Component} from 'react'
import Business from './Business'

export default class Businesses extends Component {
    
    render(){
        const generateBusinesses = () => {
            return this.props.businesses.map(business => {
                return <Business key={business.id} business= {business}/>
            })
        }
        return (
            <div>
                <ol>
                    {generateBusinesses()}
                </ol>
            </div>
            
        )
    }

}