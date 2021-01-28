import axios from 'axios';


import {
  returnErrors
} from '../actions/errorAction';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  RESEND_FAIL,
  RESEND_SUCCESS,
  CONFIRMATION_FAIL,
  CONFIRMATION_SUCCESS,
} from './types';

export const loadUser = () => (dispatch,getState) => {
    
    //user loading
    dispatch({type: USER_LOADING});

    axios.get('/user',tokenConfig(getState))
    .then(res => dispatch({
      type: USER_LOADED,
      payload: res.data
    }))
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      })
    })
    }




//Register User
export const register = ({username,email,password,passwordCheck}) => dispatch =>{


  //Headers
  const config = {
    headers:{
      'Content-Type': 'application/json'
    }
  }

  //Request body

  const body = JSON.stringify({username,email,password,passwordCheck});
  axios.post('http://localhost:5000/user/register',body,config)
  .then(res => dispatch({
    type: REGISTER_SUCCESS,
    payload: res.data 
  }))
  .catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status,'REGISTER_FAIL'));
    dispatch({
      type: REGISTER_FAIL,
    });
  });

}

//Login User 

export const login = ({username,password}) => dispatch =>{

 
  //Headers
  const config = {
    headers:{
      'Content-Type': 'application/json'
    }
  }

  //Request body

  const body = JSON.stringify({username,password});
  // console.log(username);
  axios.post('http://localhost:5000/user/login',body,config)//<--
  .then(res => dispatch({
    type: LOGIN_SUCCESS,
    payload: res.data 
  }))
  .catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status,'LOGIN_FAIL'));
    dispatch({
      type: LOGIN_FAIL
    });
  });
}


export const resend = ({resendCode}) => dispatch =>{
  const body = JSON.stringify({resendCode});
  // console.log(username);
  axios.post('http://localhost:5000/user/reSendCode',body)//<--
  .then(res => dispatch({
    type: RESEND_SUCCESS,
    payload: res.data 
  }))
  .catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status,'RESEND_FAIL'));
    dispatch({
      type: RESEND_FAIL
    });
  });
}



export const confirm = ({resendCode}) => dispatch =>{
  const body = JSON.stringify({resendCode});
  // console.log(username);
  axios.post('http://localhost:5000/user/confirm',body)//<--
  .then(res => dispatch({
    type: CONFIRMATION_SUCCESS,
    payload: res.data 
  }))
  .catch(err => {
    dispatch(returnErrors(err.response.data, err.response.status,'CONFIRMATION_FAIL'));
    dispatch({
      type: CONFIRMATION_FAIL,
    });
  });
}


// Logout User

export const logout = () => {
  return{
    type: LOGOUT_SUCCESS
  };
};

export const tokenConfig = getState =>{

    //get token from localstorage
    const token = getState().auth.token;

    //headers
    
    const config = {
      headers:{
        'Content-type': 'application/json'
      }
    }

    // if token add to headers
    if(token) config.headers['x-auth-token'] = token;

    return config;

}