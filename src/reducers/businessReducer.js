import uuid from 'uuid'

export default function businessReducer(state = {loading: false, businesses: [], reviews: []}, action){
    switch(action.type){

        case 'LOADING_BUSINESSES':
            return Object.assign({}, state, {loading: true})

        case 'FETCH_BUSINESSES':
            debugger
            return {}

        case 'ADD_REVIEW':

            const review ={
                id: uuid(),
                text: "",//
                businessId: ""//businesses id from business id
            }
            return {...state, reviews: [...state.reviews, review]} 

        default:
            return state
    }
}