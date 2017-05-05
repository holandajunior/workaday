// Internal dependencies
import { $http } from 'appServices';


/**
 * { context } base url to work with endpoints that represents some entity, for example, 'users' or 'companies'.
 * 			   Then, the base url will be API/context
 * { messages } object that contains success messages for specific endpoints
 * Ex.: { 
 * 			add: 'message',
 *  		update: 'message'
 *  	}
 */	
export default ( context, messages ) => {

	const BY_ID = ( _id ) => (
			`${__API__}/${context}/${_id}`
	);

	const FIND = `${__API__}/${context}`;
	const FIND_ONE = BY_ID;
	const ADD = `${__API__}/${context}/save`;
	const UPDATE = BY_ID;
	const REMOVE = BY_ID;

	return {

		add: ( user ) => (
			$http.post( ADD, user, { successMsg: messages.add } )
		),

		update: ( _id, user ) => (
			$http.post( UPDATE( _id ), user, { successMsg: messages.update } )
		),

		find: () => (
			$http.get( FIND )
		),

		findOne: ( _id ) => (
			$http.get( FIND_ONE( _id ) )
		),

		remove: ( _id ) => (
			$http.delete( REMOVE( _id ) )
		)

	}


}

