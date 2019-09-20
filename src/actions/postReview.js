export const postReview = (review) => {
    return (dispatch) => {
        let user = JSON.parse(localStorage.currentUser)
        let user_name = (user.first_name +" " + user.last_name)
        //add user_name to review
        review["user_name"] = user_name
        return fetch(`http://localhost:3000/api/v1/reviews`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({review})
          })
        .then(resp => resp.json())
        .then(data => {
            debugger

            //error handle
            //dispatch to store reviews and display them
        })
    }
}