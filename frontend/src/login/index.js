export { default as LoginComponent } from './components/login.component';
import * as constants from './constants';
export { default as loginReducer } from './reducer';
export { default as loginSagas } from './sagas';
import * as actions from './actions';
import * as actionTypes from './actionTypes';

export default { constants,
				 actions,
				 actionTypes };