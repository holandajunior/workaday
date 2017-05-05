// Internal dependencies
import { stateHelpers } from 'appHelpers';

const initialState = {
	meta: {
		isRequesting: false
	},
	payload: {}
};

export default ( actionTypes ) => {

	return ( state = initialState, action ) => {

		switch(action.type) {
			
			case actionTypes.ADD_REQUEST: 
			case actionTypes.ADD_SUCCESS:
			case actionTypes.ADD_ERROR:
			case actionTypes.UPDATE_REQUEST:
			case actionTypes.UPDATE_SUCCESS:
			case actionTypes.FIND_REQUEST:
			case actionTypes.FIND_SUCCESS:
			case actionTypes.FIND_ONE_REQUEST:
			case actionTypes.FIND_ONE_SUCCESS:
				return stateHelpers.newStdState( state, action );

			case actionTypes.ERROR:
				return stateHelpers.newStdState( state, {
					meta: action.meta,
					payload: {
						...state.payload,
						...action.payload
					}
				} );				

			case actionTypes.REMOVE_REQUEST:
				return stateHelpers.newStdState( state, {
					meta: action.meta,
					payload: {
						entities: state.payload.entities
					}
				} );

			case actionTypes.REMOVE_SUCCESS:
				return stateHelpers.newStdState( state, {
					meta: action.meta,
					payload: {
						entities: state.payload.entities.filter( ( elem, index ) => (
							action.meta.query.index !== index
						))
					}

				} );

			
			case actionTypes.RESET:
				return stateHelpers.newState( state, 
											  { meta: action.meta  } );
			
		}

		return state;
	}

}