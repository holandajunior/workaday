import assert from 'assert';

// Internal dependencies
import { loginReducer } from '../../src/login';
import login from '../../src/login';
import { stateHelpers } from '../../src/common';

export default describe('login_reducer', () => {
	
	const initialState = {};

	it('handles LOGIN_REQUEST by logging in an user hidding password information from state', () => {
		
		const credentials = { email: 'user@email.com',
							  password: 'password',
							  rememberMe: false }

		const action = login.actions.loginRequest( credentials );

		const nextState = loginReducer( initialState, action );

		assert.deepEqual( nextState, stateHelpers.newState(initialState, {
			meta: {
				isFetching: true,
				isAuthenticated: false
			},
			payload: {
				email: credentials.email
			}
		}) );
		
	});

	it("handles LOGIN_SUCCESS getting user token only", () => {
		
		const token = "153345jah123kasdhk";
		const action = login.actions.loginSuccess({ token: token});
		const nextState = loginReducer( initialState, action );

		assert.deepEqual( nextState, stateHelpers.newState( initialState, {
			meta: {
				isFetching: false,
				isAuthenticated: true
			},
			payload: {
				userToken: token
			}
		}) );

	});

	it("handles LOGIN_ERROR in case there is no login successfuly", () => {
		
		const requestState = {
								meta: {
									isFetching: true,
									isAuthenticated: false
								},
								payload: {
									email: "jhondoe@gmail.com"
								}
							};

		const errorMsg = "An error occurred during login phase";
		const action = login.actions.loginError(errorMsg);
		const nextState = loginReducer(requestState, action);

		assert.deepEqual( nextState, stateHelpers.newState( requestState, {
			meta: {
				isFetching: false,
				isAuthenticated: false
			},
			payload: new Error(errorMsg),
			error: true

		} ));



	});

	it("handles LOGIN_RESET reseting all login state", () => {

		const action = login.actions.loginReset();
		const nextState = loginReducer( initialState, action );

		assert.deepEqual( nextState, stateHelpers.newState( initialState, {
			meta: {
				isFetching: false,
				isAuthenticated: false
			}
		} ) );

	})
});