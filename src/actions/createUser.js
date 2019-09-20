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
          if(data.message.email && data.message.password){
            alert(`Email & Password ${data.message.password[0]}`)
          }
          else if (data.message.email){
            alert(`Email ${data.message.email[0]}`)
          }
          else if(data.message.password){
            alert(`Password ${data.message.password[0]}`)
          }
        }
        else{
          //put currentUser in localStorage to have access across app
          localStorage.setItem("currentUser", JSON.stringify(data))
          //dispatch to reducer storing the user in currentUser:{} inside of state object
          dispatch({type:'LOGIN_USER', payload: data})
        }
      })
  
    }
}