import { reducer as formReducer } from 'redux-form';

// Internal dependencies
import { pointActionTypes } from './admin';

const reducer = formReducer.plugin({
	
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