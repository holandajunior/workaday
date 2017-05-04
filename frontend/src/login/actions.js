// Internal dependencies
import * as types from './actionTypes';
import { actionHelpers } from 'appHelpers';

export const loginRequest = ( credentials ) => (
	actionHelpers.createAction( types.LOGIN_REQUEST,
								{
									isRequesting: true,
									isAuthenticated: false
								},
								credentials )
	
)

export const loginSuccess = ( user ) => (
	actionHelpers.createAction( types.LOGIN_SUCCESS,
								{
									isRequesting: false,
									isAuthenticated: true
								},
								{ userToken: user.token	} )
	
)

export const loginError = ( message ) => (
	actionHelpers.createActionWithError( types.LOGIN_ERROR,
										{
											isRequesting: false,
											isAuthenticated: false
										})( message )
)


export const logoutRequest = () => (
	actionHelpers.createAction( types.LOGOUT_REQUEST,
								{
									isRequesting: true,
									isAuthenticated: true
								})
)

export const logoutSuccess = () => (
	actionHelpers.createAction( types.LOGOUT_SUCCESS,
								{
									isRequesting: false,
									isAuthenticated: false
								})
)

export const logoutError = ( message ) => (
	actionHelpers.createActionWithError( types.LOGOUT_ERROR,
										{
											isRequesting: false,
											isAuthenticated: true
										})( message )
)

export const loginLogoutReset = () => (
	actionHelpers.createAction( types.LOGIN_LOGOUT_RESET,
								{
									isRequesting: false,
									isAuthenticated: false
								})
)


export const signupRequest = ( user ) => (
	actionHelpers.createAction( types.SIGNUP_REQUEST,
								{
									isRequesting: true,
								},
								user )
	
)

export const signupSuccess = ( user ) => (
	actionHelpers.createAction( types.SIGNUP_SUCCESS,
								{
									isRequesting: false,
								})
	
)

export const signupError = ( user ) => (
	actionHelpers.createAction( types.SIGNUP_ERROR,
								{
									isRequesting: false,
								})
	
)

export const signupReset = ( user ) => (
	actionHelpers.createAction( types.SIGNUP_RESET,
								{
									isRequesting: false,
								})
	
)