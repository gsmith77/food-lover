import React from 'react'
import {connect} from 'react-redux'

export class User extends React.Component{
    render(){
        const currentUser = this.props.currentUser
        return(
            <div id="userShowPage">
                <h1>{currentUser.email}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser}

}

export default connect(mapStateToProps)(User)