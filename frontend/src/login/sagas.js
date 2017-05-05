import { fork, call, put, take, cancelled, cancel } from 'redux-saga/effects';

// Internal dependencies
import * as actions from './actions';
import * as api from './api';
import * as types from './actionTypes';
import { $localStorage } from 'appServices';

function* login(username, password) {
	try {
		
		const result = yield call( api.login, username, password );	
		yield call( $localStorage.save, app.storage.USER_TOKEN, { token: result.data.token } );
		yield call( $localStorage.save, app.storage.USER_ID, result.data.userId );
		yield put( actions.loginSuccess(result.data) );
		
	} catch( error ) {
		yield put( actions.loginError( error ) );
	
	// Treat app status in case that login has been cancelled
	// Imagine that: app is showing a loader while is doing login
	// Then, suddenly use requests logout. Since the login task
	// was cancelled, we need an action to reset app status 
	} finally {
		if( yield cancelled()) {
			yield put( actions.loginLogoutReset() );
		}
	}
}

function* loginFlow() {
	while(true) {
		
		// Wait for LOGIN_REQUEST action
		const { payload } = yield take(types.LOGIN_REQUEST);

		console.log( payload );

		// Initialize a non-blocking task
		const loginTask = yield fork( login, payload.username, payload.password );	
		const action = yield take([ types.LOGOUT_REQUEST, types.LOGIN_ERROR ]);
		
		//Cancel Login Request If user logouts before login has finished
		if(action.type === types.LOGOUT )
			yield cancel(loginTask);

		// yield call(CLEAR_NECESSARY_DATA_LOCAL)
		
	}
	
}

function* logout() {
	while(true) {

		try {

			yield take( types.LOGOUT_REQUEST );
			// yield call( api.logout );
			yield call( $localStorage.remove, app.storage.USER_TOKEN);
			yield call( $localStorage.remove, app.storage.USER_ID);
			yield put( actions.logoutSuccess() );

		
		} catch( error ) {

			yield put( actions.logoutError( error ) );
		
		} finally {

			yield put( actions.loginLogoutReset() );
		}

	}
}

function* signup() {
	while(true) {

		try {

			const { payload } = yield take( types.SIGNUP_REQUEST );
			yield call( api.signup, payload );
			yield put( actions.signupSuccess() );
		
		} catch( error ) {

			yield put( actions.signupError( error ) );
		
		} finally {

			yield put( actions.signupReset() );
		}

	}
}


export default { loginFlow,
				 logout,
				 signup };