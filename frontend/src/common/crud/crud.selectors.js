export default {

		getEntities: ( context ) => {
			if( context.payload && context.payload.entities )
				return context.payload.entities;
			else
				return [];
		}

};


