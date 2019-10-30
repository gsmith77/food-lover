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
            const newReviewsWBizIds = action.payload[0].map(review => {
                return review = {...review, business_id: action.payload[1]}
            })
            //go through reviews in database and make business Id for review the id from yelps business id
            return {...state, reviews: [...state.reviews, newReviewsWBizIds].flat(), loading: false} 

        default:

            return state

    }
}