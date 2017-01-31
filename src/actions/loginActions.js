import * as types from './actionTypes';
import LoginApi from '../api/mockData';

function attemptLogin() {
    return { type: types.LOGIN_ATTEMPT };
}

function loginSuccess(data) {
    return {type: types.LOGIN_SUCCESS, data}
}

export function login(data) {
    return (dispatch, getState) => {
        dispatch(attemptLogin());
        return LoginApi.login(data).then(response => {
            dispatch(loginSuccess(data));
            console.log(response);
        }).catch(error => {
            throw(error);
        })
    }
}