export const fetchReviews = (props) => {
    const API_KEY = 'Gmj3pVCqtYZm3hR1d3DHkwyW1qTACEsDlx4Amwst8-a2CFeVxD2VV243JCE6puLFc1VWvY0Rn9OLD-ATOylqJq_zllaydUZ6F0qeCxjSfrOpWBvvL8r4Srz1IVBXXXYx'

    return (dispatch) => {
        dispatch({type:'LOADING_REVIEWS'})
        //fetching to a rails route that I have set up for searching reviews
        //services folder where you put classes that arent models, making api calls
        //make a Search Class, when you create a search it executes the search service to fetch to the Yelp API
        //cant be sending fetch requests bc you need the API KEY which would be displayed on the browser which is NO NO!
        //get request using faraday to send to your service folders
        
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/${props}/reviews`, {headers:{'Authorization': `Bearer ${API_KEY}`}})
        .then(resp => resp.json())
        .then(reviews => dispatch({type:'FETCH_REVIEWS', payload: [reviews, props]}))
    }
}