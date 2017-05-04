// Internal dependencies
import { crudSagasCreator } from 'appCrud';
import * as actionTypes from './actionTypes';
import * as api from './api';
import actions from './actions'

export default crudSagasCreator( actionTypes, api, actions );

