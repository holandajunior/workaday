// Internal dependencies
import * as actionTypes from './actionTypes';
import { crudActionsCreator } from 'appCrud';
import { actionHelpers } from 'appHelpers';

const actions = crudActionsCreator( actionTypes );
export default actions;