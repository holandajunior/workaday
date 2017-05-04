import assert from 'assert';

// Internal dependencies
import { stateHelpers } from '../../src/common';
import login from '../../src/login';
import { appReducer, $localStorage } from '../../src/common';

export default describe('auth_reducer', () => {
	
	

	const initialState = {
		app: {
			isAuthenticated: false
		}
	};


	it('handles LOGIN_SUCCESS setting user as authenticated', () => {


		const expected = {
			isAuthenticated: true
		};

		const loginAction = login.actions.loginSuccess( { token: 'token' } );
		const nextState = appReducer( initialState, loginAction  );

		assert.deepEqual( nextState, stateHelpers.newState( initialState, expected ) );

	});

	it('handles WHATEVER action returning authenticated when user HAS token stored', () => {

		return $localStorage.save( app.storage.USER_TOKEN, "token" ).then( () => {
			
			const expected = {
				isAuthenticated: true
			};

			const nextState = appReducer( initialState, { type: "WHATEVER" }  );
			assert.deepEqual( nextState, stateHelpers.newState( initialState, expected ) );			
			

		});


	});

	it('handles WHATEVER action returning NOT authenticated when user HAS NOT token stored', () => {

		return $localStorage.remove( app.storage.USER_TOKEN, "token" ).then( () => {
			
			const expected = {
				isAuthenticated: false
			};

			const nextState = appReducer( initialState, { type: "WHATEVER" }  );
			assert.deepEqual( nextState, stateHelpers.newState( initialState, expected ) );			
			

		});	

	});

} );