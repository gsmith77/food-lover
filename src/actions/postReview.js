import { connect } from "react-redux";

export const postReview = (review, reviews) => {
    return (dispatch) => {
      try{
        var user = JSON.parse(localStorage.currentUser)

        let user_name = (user.first_name + " " + user.last_name)
        //add user_name to review
        review["user"] = user
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
          if(data.text !== "cant't be blank"){
            //check how many reviews there are now
            //AJAX to now show the new one at the top
            dispatch({type: 'ADD_REVIEW', payload: [data, reviews]})
            //dispatch to store reviews and display them
          }else{
            alert('text ' + data.text.join(''))
          }
        })
      }
      catch{
        //error catch if there is no current user
        alert('Please Log In To Be Able Leave A Review.')
      }
    }
}


const mapStateToProps = (state) => {
  debugger
  return {
    reviews: state.business.reviews
  }
}


export default connect(mapStateToProps)(postReview)