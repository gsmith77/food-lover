export const fetchReviews = (props) => {
    return (dispatch) => {
        dispatch({type:'LOADING_REVIEWS'})
        return fetch(`http://localhost:3000/business_reviews?id=${props.id}`)
        .then(resp => resp.json())
        .then(reviews => dispatch({type:'FETCH_REVIEWS', payload: [reviews, props.id]}))
    }
}