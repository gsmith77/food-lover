export const fetchReviews = (props) => {
    const API_KEY = 'Gmj3pVCqtYZm3hR1d3DHkwyW1qTACEsDlx4Amwst8-a2CFeVxD2VV243JCE6puLFc1VWvY0Rn9OLD-ATOylqJq_zllaydUZ6F0qeCxjSfrOpWBvvL8r4Srz1IVBXXXYx'
    return (dispatch) => {
        dispatch({type:'LOADING_REVIEWS'})
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${props}/reviews`, {headers:{'Authorization': `Bearer ${API_KEY}`}})
        .then(resp => resp.json())
        .then(reviews => dispatch({type:'FETCH_REVIEWS', payload: [reviews, props]}))
    }
}