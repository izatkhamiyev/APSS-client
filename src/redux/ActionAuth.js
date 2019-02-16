import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

const requestLogin = (creds) => {
    return { 
        type: ActionTypes.LOGIN_REQUEST,
        payload: creds
    }
}

const recieveLogin = (token) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: token
    }
}

const failLogin = (err) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        payload: err
    }
}

export const loginAdmin = (creds) => (dispatch) => {
    dispatch(requestLogin(creds));

    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        body: JSON.stringify(creds),
        headers: {
            'Content-type': 'application/json'
        }
    })
    // .then((response) => {
    //     if(response.ok)
    //         return response;
    //     else{
    //         var error = new Error("Error " + response.status + ': ' + response.statusText);
    //         error.response = response;
    //         //throw error;
    //         console.log('asdf')
    //         return response;
    //     }
    // })
    .then(response => response.json())
    .then(response => {
        if(response.success){
            console.log(response.token.exp);
            localStorage.setItem('token', JSON.stringify(response.token));
            localStorage.setItem('creds', JSON.stringify(creds));
            dispatch(recieveLogin(response.token));
        }else{
            var error = new Error('Error ' + response.status);
            error.response = response;
            console.log(response);
            throw error;
        }
    })
    .catch(err => dispatch(failLogin(err.response.err.message)));
}

const requestLogout = () => {
    return { 
        type: ActionTypes.LOGOUT_REQUEST
    }
}

const recieveLogout = () => {
    return {
        type: ActionTypes.LOGOUT_SUCCESS
    }
}

export const logoutAdmin = () => (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(recieveLogout());
}