export const newStdState = (oldState, data ) => {
	let state = newState(oldState, {
		meta: data.meta, 
		payload: data.payload, 
	});

	if( data.error )
		state.error = data.error;
	
	else if( state.error ) {
		state.error = false;
	}

	return state;
};

export const newState = (oldState, data) => ( 
	merge(oldState, data)
);

const merge = ( oldData, newData ) => (
	Object.assign({}, oldData, newData)
);