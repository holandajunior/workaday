export const createAction = ( type, meta, payload ) => {
	if( !payload )
		payload = {};
	
	return {
		type: type,
		meta,
		payload 
	};
};

export const createActionWithError = ( type, meta, payload ) => {
	return ( message ) => {
		const action = createAction(type, meta, payload);
				
		if(!action.payload) {
			action.payload = {}
		}
		
		action.payload.error = new Error( message );
		action.error = true;

		return action;		
	}
}