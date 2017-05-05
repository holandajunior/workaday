// Internal dependencies
import * as types from './actionTypes';
import { stateHelpers } from 'appHelpers';

const initialState = {
	meta: {
		isFetching: false,
		isAuthenticated: false
	}
};

export default (state = initialState, action) => {
		
	switch(action.type) {
		case types.LOGIN_REQUEST:
			
			return stateHelpers.newState( state, {
				meta: action.meta,
				payload: { 
					username: action.payload.username
				}
			} );
		
		case types.LOGIN_ERROR:
		case types.LOGIN_SUCCESS:
		case types.LOGOUT_REQUEST:
		case types.LOGOUT_SUCCESS:
		case types.LOGOUT_ERROR:
		case types.SIGNUP_REQUEST:
		case types.SIGNUP_SUCCESS:
		case types.SIGNUP_ERROR:
		case types.SIGNUP_RESET:
			
			return stateHelpers.newStdState( state, action );

		case types.LOGIN_LOGOUT_RESET:
			
			return stateHelpers.newState( state, {
				meta: action.meta
			} );	
	}

	return state;
};
