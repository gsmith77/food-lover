Date.prototype.getUnixTime = function() { return this.getTime()/1000|0 };
if(!Date.now) Date.now = function() { return new Date(); }
Date.time = function() { return Date.now().getUnixTime(); }

export const fetchEvents = (props) => {
    const searchDate = new Date(props.date)
    return (dispatch) => {
        dispatch({type:'LOADING_EVENT'})
        return fetch(`http://localhost:3000/api/v1/search_events?location=${props.location}&date=${searchDate.getUnixTime()}`)
        .then(resp => resp.json())
        .then(events => dispatch({type:'FETCH_EVENT', payload: events}))
    }
}