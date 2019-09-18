export default function userReducer(state={currentUser: {}}, action){
    switch(action.type){
        case 'LOGIN_USER':
        //set user that was created as currentUser for state management across the App

        return {...state, currentUser: action.payload}

        default:

            return {...state}

    }

}