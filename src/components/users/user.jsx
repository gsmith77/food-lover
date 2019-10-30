import React from 'react'
import './user.css'
import {logOutUser} from '../../actions/logOutUser'
import {connect} from 'react-redux'

class User extends React.Component{

    logout = (currentUserEmail) => {
        alert(`Have a great day ${this.props.currentUser.first_name}`)
        localStorage.removeItem("currentUser")
        this.props.logOutUser(currentUserEmail)
        window.location.reload(false);
        //PAGE REFRESH TO TAKE AWAY CURRENT USER FOR GOOD
    }

    render(){
        const currentUser = this.props.currentUser
        if (currentUser !== null){
            return(
                <div className="userShowPage">
                    <h1>{currentUser.email}</h1>
                    {"\n"}
                    <button onClick={() => this.logout(currentUser.email)}>Log Out</button>
                </div>
            )
        }
        else{
            return null
        }
    }
}

export default connect(null, {logOutUser})(User)

