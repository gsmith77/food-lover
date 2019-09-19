export const logOutUser = (userId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/logout?id=${userId}`)
        .then(resp => resp.json())
        .then(data => {
            alert(data.message)
            //use dispatch to clear currentUser out of state
            dispatch({type:'LOGOUT_USER'})
        })
    }
}