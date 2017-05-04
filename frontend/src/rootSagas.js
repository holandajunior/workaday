// Internal dependencies
import { loginSagas } from './login';
import { pointSagas } from './admin';

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
  	// Login
    loginSagas.loginFlow(),
    loginSagas.logout(),
    loginSagas.signup(),

    // User
    pointSagas.find(),
    pointSagas.update()
  ]
}