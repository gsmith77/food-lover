export default function userReducer(state={currentUser: {}}, action){
    switch(action.type){
        case 'LOGIN_USER':
        //set user that was created as currentUser for 
        //state management across the App
            debugger
            return {...state, currentUser: action.payload}

        case 'LOGOUT_USER':

            return {...state, currentUser: null}

        default:

            return {...state, currentUser: null}

    }

}