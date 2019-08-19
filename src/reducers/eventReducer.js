export default function eventReducer(state={ loading: false, event: []}, action){
    switch(action.type){
        case 'LOADING_EVENT':

            return Object.assign({}, {...state}, {loading: true})

        case 'FETCH_EVENT':

        return {...state, event: action.payload, loading: false}

        default:

            return state
    }
}