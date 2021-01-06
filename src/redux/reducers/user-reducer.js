import {SET_LOADING, GET_USERS, ADD_USER, GET_USER} from '../action/user-action'

const initialState = {
    loading: false,
    users: []
}

export default (state = initialState, {type, playload}) => {    
    switch (type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_USERS:           
            return {
                ...state,
                users: playload,
                loading: false
            }
        case GET_USER:           
                return {    
                    ...state,          
                    users: [playload, ...state.users],              
                    loading: false
                }
        case ADD_USER:
            return {
                ...state,
                users: [playload, ...state.users],
                loading: false
            }
        default:
            return state;
    }
}