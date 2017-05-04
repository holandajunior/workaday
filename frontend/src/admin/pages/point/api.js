// Internal dependencies
import { crudApiCreator } from 'appCrud';

const FIND = ( userId ) => (
	`${__API_READ__}/users/${userId}/points`
)

export const find = ( userId ) => (
	$http.get( FIND( userId ) )
)
