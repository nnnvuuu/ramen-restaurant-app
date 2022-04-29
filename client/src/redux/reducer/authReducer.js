import {
    USER_LOADING,
    USER_LOADED, 
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CONFIRMATION_FAIL,
    CONFIRMATION_SUCCESS,
    RESEND_SUCCESS,
    RESEND_FAIL,
    } from '../actions/types';
    
    const initState = {
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      isLoading: false,
      user: null,
      isConfirmed:false,
      isResend:false,
      isInCooldown:false,
    };
    
    export default function ( state = initState, action){
      switch(action.type){
        case USER_LOADING:
          return {
            ...state,
            isLoading:true
          };
          case USER_LOADED:
          return{
            ...state,
            isAuthenticated:true,
            isLoading:false,
            user: action.payload
          };
          case LOGIN_SUCCESS:
          case REGISTER_SUCCESS:
           localStorage.setItem('token',action.payload.token);
          return{
            ...state,
            ...action.payload,
            isAuthenticated:true,
            isLoading:true
          }
          case AUTH_ERROR:
          case LOGIN_FAIL:
          case LOGOUT_SUCCESS:
          case REGISTER_FAIL:
          localStorage.removeItem('token');
          return{
            ...state,
            token:null,
            user: null,
            isAuthenticated:false,
            isLoading:false
          }
          case RESEND_SUCCESS:
            return{
              ...state,
              isResend:true,
              isInCooldown:true,
            }
          case CONFIRMATION_SUCCESS:
            localStorage.setItem('token',action.payload.token);
             return{
               ...state,
               isConfirmed:true,
             }
          // case CONFIRMATION_FAIL:{

          // }
        

          default:
            return state;    
    }
      }
     