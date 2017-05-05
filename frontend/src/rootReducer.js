import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import {reducer as toastrReducer} from 'react-redux-toastr'

/*
 Internal dependencies
*/
import { loginReducer } from './login';
import { pointReducer } from './admin';
		 
import appReducer from 'appReducer';
import formReducer from './rootFormReducer';


export default combineReducers({
	app: appReducer,
	login: loginReducer,
	point: pointReducer,
	form: formReducer,
	routing: routerReducer,
	toastr: toastrReducer
});