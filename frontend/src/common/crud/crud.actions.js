// Internal dependencies
import { actionHelpers } from 'appHelpers';

export default ( actionTypes ) => {

	return {
		
		/*
		 * Add actions
		 */
		addSuccess: ( entity ) => (
			actionHelpers.createAction( actionTypes.ADD_SUCCESS,
										{ isRequesting: false }, 
										{ entity } )
		),

		addRequest: ( entity ) => (
			actionHelpers.createAction( actionTypes.ADD_REQUEST,
										{ isRequesting: true }, 
										{ entity } )	
		),

		addError: ( entity, message ) => (
			actionHelpers.createActionWithError( actionTypes.ADD_ERROR,
												{ isRequesting: false }, 
												{ entity } )( message )	
		),

		/*
		 * Find actions
		 */

		findSuccess: ( entities ) => (
			actionHelpers.createAction( actionTypes.FIND_SUCCESS,
										{ isRequesting: false }, 
										{ entities } )
		),

		findRequest: () => (
			actionHelpers.createAction( actionTypes.FIND_REQUEST,
										{ isRequesting: true })	
		),


		/*
		 * Find one actions
		 */

		findOneSuccess: ( entity ) => (
			actionHelpers.createAction( actionTypes.FIND_ONE_SUCCESS,
										{ isRequesting: false }, 
										{ entity } )
		),

		findOneRequest: ( _id ) => (
			actionHelpers.createAction( actionTypes.FIND_ONE_REQUEST,
										{ isRequesting: true, query: { _id } })	
		),

		/*
		 * Edit actions
		 */

		updateSuccess: ( entity ) => (
			actionHelpers.createAction( actionTypes.UPDATE_SUCCESS,
										{ isRequesting: false }, 
										{ entity } )
		),

		updateRequest: ( _id, entity ) => (
			actionHelpers.createAction( actionTypes.UPDATE_REQUEST,
										{ isRequesting: true, query: { _id } },
										{ entity })	
		),


		/*
		 * Remove actions
		 */

		removeSuccess: ( index ) => (
			actionHelpers.createAction( actionTypes.REMOVE_SUCCESS,
										{ isRequesting: false, query: { index } })
		),

		removeRequest: ( index, _id ) => (
			actionHelpers.createAction( actionTypes.REMOVE_REQUEST,
										{ isRequesting: true, query: { _id, index } })	
		),


		/*
		 * Common actions
		 */

		error: ( message ) => (
			actionHelpers.createActionWithError( actionTypes.ERROR, 
												 { isRequesting: false } )( message )
		),

		reset: () => (
			actionHelpers.createAction( actionTypes.RESET,
										 { isRequesting: false } )
		)


	}

}