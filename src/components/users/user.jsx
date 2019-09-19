import React from 'react'
import {logOutUser} from '../../actions/logOutUser'
import {connect} from 'react-redux'

class User extends React.Component{

    render(){
        const currentUser = this.props.currentUser
        if (currentUser !== null){
            return(
                <div id="userShowPage">
                    <h1>{currentUser.email}</h1>
                    {"\n"}
                    <button onClick={() => this.props.logOutUser(currentUser.id)}>Log Out</button>
                </div>
            )
        }
        else{
            return null
        }
    }
}

export default connect(null, {logOutUser})(User)

