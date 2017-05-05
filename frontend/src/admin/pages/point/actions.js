// Internal dependencies
import * as actionTypes from './actionTypes';
import { crudActionsCreator } from 'appCrud';
import { actionHelpers } from 'appHelpers';
import { $localStorage } from 'appServices';

const actions = crudActionsCreator( actionTypes );

actions.findRequest = () => (
	actionHelpers.createAction( actionTypes.FIND_REQUEST,
								{ isRequesting: true },
								{ userId: $localStorage.get( app.storage.USER_ID ) })	
)

export default actions;