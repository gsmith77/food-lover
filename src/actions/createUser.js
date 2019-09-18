export const createUser = user => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/users", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({user})
      })
      .then(resp => resp.json())
      .then(data => {
        if(data.message){
          //display error message from invalid user
          debugger
        }
        else{
          //dispatch to reducer storing the user in currentUser:{} inside of state object
          dispatch({type:'LOGIN_USER', payload: data})
        }
      })
  
    }
}