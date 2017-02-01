import * as types from '../actions/actionTypes';
import initialState from './initialState';

//Object.assign creates a NEW object; the contents being the second parameter to prevent mutation
export default function loginReducer(state = initialState.userData, action) {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            console.log(action, state);
            return [
                ...state,
                Object.assign({}, action.data)
            ];

        case types.LOGIN_FAILED:
            console.log(action, state);
            return [
                ...state,
                Object.assign({}, action.data)
            ];

        default:
            return state;
    }
}