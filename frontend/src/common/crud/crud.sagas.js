import { fork, call, put, take, cancelled, cancel } from 'redux-saga/effects';

// Internal dependencies
import { crudActionsCreator } from 'appCrud';

export default ( actionTypes, api, actions ) => {

	if( !actions )
		actions = crudActionsCreator( actionTypes );

	return {
		
		add: function* () {
			while( true ) {

				let lastEntity;

				try {

					const { payload } = yield take( actionTypes.ADD_REQUEST );
					
					lastEntity = payload.entity;

					const result = yield call( api.add, payload.entity );
					
					const newEntity = result.data.data;

					yield put( actions.addSuccess( newEntity ) );
				
				} catch ( error ) {
					yield put( actions.addError( lastEntity, error ) );
				
				} finally {
					yield put( actions.reset() );
				}
				
			}

		},

		update: function* () {
			while( true ) {

				try {

					const { payload, meta } = yield take( actionTypes.UPDATE_REQUEST );
					const result = yield call( api.update, meta.query._id, payload.entity );
					
					const newEntity = result.data.data;
					yield put( actions.updateSuccess( newEntity ) );
				
				} catch ( error ) {
					yield put( actions.error( error ) );
				
				} finally {
					yield put( actions.reset() );
				}
				
			}

		},

		find: function* () {
			
			while( true ) {

				try {

					yield take( actionTypes.FIND_REQUEST );
					const result = yield call( api.find );

					const entities = result.data.data;
					yield put( actions.findSuccess( entities ) );
				
				} catch( error ) {

					yield put( actions.error( error ) )
				
				} finally {
					
					yield put( actions.reset() );
				}
			}

		},

		findOne: function* () {
			
			while( true ) {

				try {

					const { meta } = yield take( actionTypes.FIND_ONE_REQUEST );
					const result = yield call( api.findOne, meta.query._id );

					const entity = result.data.data;
					yield put( actions.findOneSuccess( entity ) );
				
				} catch( error ) {

					yield put( actions.error( error ) )
				
				} finally {
					
					yield put( actions.reset() );
				}
			}

		},

		remove: function* () {

			while( true ) {

				try {

					const { meta } = yield take( actionTypes.REMOVE_REQUEST );
					yield call( api.remove, meta.query._id );
					yield put( actions.removeSuccess( meta.query.index ) );
				
				} catch( error ) {
					yield put( actions.error( error ) )
				
				} finally {
					
					yield put( actions.reset() );
				}
			}

				
		}


	};
}