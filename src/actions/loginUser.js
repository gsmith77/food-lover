export const loginUser = (user) => {
    return (dispatch) => {
        user.email = user.email.slice(0,user.email.length-4)
        //have to manually delete .com since it see .com as a format instead of part of the email
        return fetch(`http://localhost:3000/api/v1/users/${JSON.stringify({user})}`)
        .then(resp => resp.json())
        .then(data => {
            if(data.message){
                //display error message
                alert(data.message)
            }
            else{
                //dispatch to reducer storing the user in currentUser:{} inside of state object
                dispatch({type:'LOGIN_USER', payload: data})
            }
        })
    }
}