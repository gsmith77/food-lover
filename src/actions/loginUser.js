export const loginUser = (user) => {
    return (dispatch) => {
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