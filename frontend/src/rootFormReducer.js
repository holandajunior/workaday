import { reducer as formReducer } from 'redux-form';

// Internal dependencies
import { pointActionTypes } from './admin';
import login from './login';

const reducer = formReducer.plugin({
	
	signupForm: ( state, action ) => {

		switch( action.type ) {

			case login.actionTypes.SIGNUP_SUCCESS:
				return undefined;
			
			default:
				return state;		
		}
	},

	point: ( state, action ) => {

		switch( action.type ) {

			case pointActionTypes.ADD_SUCCESS:
				return undefined;
			
			default:
				return state;		
		}
	}

});

export default reducer;