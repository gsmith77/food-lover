export const fetchBusinesses = (props) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_BUSINESSES'})
        return fetch(`http://localhost:3000/api/v1/search_businesses?term=${props.term}&location=${props.location}`)
        .then(resp => resp.json())
        .then(businesses => {
            dispatch({type:'FETCH_BUSINESSES', payload: businesses})
        })
    }
    
    //do error handing on each action.
}