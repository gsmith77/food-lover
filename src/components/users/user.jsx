import React from 'react'
import './user.css'
import {logOutUser} from '../../actions/logOutUser'
import {connect} from 'react-redux'

class User extends React.Component{

    logout = (currentUserId) => {
        localStorage.removeItem("currentUser")
        this.props.logOutUser(currentUserId)
    }

    render(){
        const currentUser = this.props.currentUser
        if (currentUser !== null){
            return(
                <div className="userShowPage">
                    <h1>{currentUser.email}</h1>
                    {"\n"}
                    <button onClick={() => this.logout(currentUser.id)}>Log Out</button>
                </div>
            )
        }
        else{
            return null
        }
    }
}

export default connect(null, {logOutUser})(User)

