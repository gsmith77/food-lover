export const fetchEvents = (props) => {
    return (dispatch) => {
        dispatch({type:'LOADING_EVENT'})
        return fetch(`http://localhost:3000/api/v1/search_events?location=${props.location}`)
        .then(resp => resp.json())
        .then(events => dispatch({type:'FETCH_EVENT', payload: events}))
    }
}