export default function eventReducer(state={ loading: false, events: []}, action){
    switch(action.type){
        case 'LOADING_EVENT':

            return Object.assign({}, {...state}, {loading: true})

        case 'FETCH_EVENT':

            return {...state, events: [...state.events, action.payload].flat(), loading: false}

        default:

            return state
    }
}