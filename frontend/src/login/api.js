import { $http } from 'appServices';

const LOGIN = `${__API_WRITE__}/login`;
const LOGOUT = `${__API_WRITE__}/logout`;
const SIGNUP = `${__API_WRITE__}/signup`;

export const login = ( username, password ) => (
	$http.post( LOGIN, { username, password } )
);

export const logout = () => (
	$http.get( LOGOUT )
)

export const signup = ( user ) => (
	$http.post( SIGNUP, { ...user }, { successMsg: 'Your account was created. Enjoy it!' } )
)

	
