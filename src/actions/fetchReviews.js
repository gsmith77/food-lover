export const fetchReviews = (props) => {
    return (dispatch) => {
        dispatch({type:'LOADING_REVIEWS'})
        if(props.name.includes('&')){
            let andSignIndex = props.name.indexOf('&') 
            let firstHalf = props.name.slice(0, andSignIndex)
            let and = " and "
            let secondHalf = props.name.slice(andSignIndex + 1, props.name.length)
            return fetch(`http://localhost:3000/api/v1/business_reviews?id=${props.id}&firstHalf=${firstHalf}&andSign=${and}&secondHalf=${secondHalf}`)
            .then(resp => resp.json())
            .then(reviews => {dispatch({type:'FETCH_REVIEWS', payload: [reviews, props.id]})})
        }
        else{
            return fetch(`http://localhost:3000/api/v1/business_reviews?id=${props.id}&name=${props.name}`)
            .then(resp => resp.json())
            .then(reviews => {dispatch({type:'FETCH_REVIEWS', payload: [reviews, props.id]})})
        }
    }
}