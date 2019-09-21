export default function businessReducer(state = {loading: false, businesses: [], reviews: []}, action){
    switch(action.type){

        case 'LOADING_BUSINESSES':
            
            return Object.assign({}, {...state}, {loading: true})

        case 'FETCH_BUSINESSES':
            
            return {...state, businesses: [...state.businesses, action.payload].flat(), loading: false}

        //REVIEWSREDUCER

        case 'LOADING_REVIEWS':

            return Object.assign({}, {...state}, {loading: true})

        case 'FETCH_REVIEWS':
            const newReviews= action.payload[0].map(review => {
                return(review = {...review, businessId: action.payload[1] })
            })
            return {...state, reviews: [...state.reviews, newReviews].flat(), loading:false} 

        default:
            return state
    }
}