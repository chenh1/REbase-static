import * as types from './actionTypes';
import LoginApi from '../api/mockData';

function attemptLogin() {
    return { type: types.LOGIN_ATTEMPT };
}

function loginSuccess(data) {
    return {type: types.LOGIN_SUCCESS, data}
}

function loginFailed(data) {
    return {type: types.LOGIN_FAILED, data}
}

export function login(data) {
    return (dispatch, getState) => {
        dispatch(attemptLogin());
        return LoginApi.login(data).then(response => {
            console.log(response)
            dispatch(loginSuccess(response));
        }).catch(error => {
            dispatch(loginFailed(error));
        })
    }
}