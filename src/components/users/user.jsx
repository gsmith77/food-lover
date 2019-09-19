import React from 'react'

export default class User extends React.Component{

    logOut = (currentUserId) => {
        //use dispatch and place this insince of an action
        return fetch(`http://localhost/api/v1/logout?${currentUserId}`)
        .then(resp => resp.json())
        .then(data => {
            debugger
            alert(data.message)
        })
    }
    render(){
        const currentUser = this.props.currentUser
        return(
            <div id="userShowPage">
                <h1>{currentUser.email}</h1>
                {"\n"}
                <button onClick={() => this.logOut(currentUser.id)}>Log Out</button>
            </div>
        )
    }
}


