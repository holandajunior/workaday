import { call, put, take } from 'redux-saga/effects'

// Internal dependencies
import { crudSagasCreator } from 'appCrud';
import * as actionTypes from './actionTypes';
import * as api from './api';
import actions from './actions';

const sagas = crudSagasCreator( actionTypes, api, actions );

sagas.find = function* () {
			
	while( true ) {

		try {
			
			const { payload } = yield take( actionTypes.FIND_REQUEST );
			
			const result = yield call( api.find, payload.userId );
			
			const entities = result.data;
			yield put( actions.findSuccess( entities ) );

		} catch( error ) {

			yield put( actions.error( error ) )
		
		} finally {
			
			yield put( actions.reset() );
		}
	}

}

export default sagas;
