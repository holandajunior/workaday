// Internal dependencies
import login from '../login';
import { stateHelpers } from './helpers';
import { $localStorage } from './services';

const initialState = {
	isAuthenticated: false
}


export default ( state = initialState, action ) => {
			
	switch( action.type ) {

		case login.actionTypes.LOGIN_SUCCESS:
			return stateHelpers.newState( state, { isAuthenticated: true } );		
	
	}


	return stateHelpers.newState( state, { isAuthenticated: $localStorage.get( app.storage.USER_TOKEN ) ? true : false } );
	
}
