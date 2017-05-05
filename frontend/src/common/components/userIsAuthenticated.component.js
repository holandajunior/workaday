import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

export function requireAuth(Component) {

	class UserIsAuthenticated extends React.Component {

		componentWillMount() {
			this.checkAuth();
		}

		componentWillReceiveProps(nextProps) {
			this.checkAuth();
		}

		checkAuth() {

			const { dispatch, location, app, login } = this.props;
			

			if(!app.isAuthenticated && !login.meta.isAuthenticated){
				let redirect = location.pathname;
				dispatch( push(`/login?next=${redirect}`) );
			}
		}

		render() {
			
			return (
				<div>
					{ ( this.props.app.isAuthenticated || this.props.login.meta.isAuthenticated ) === true 
					&& <Component { ...this.props } /> }
				</div>
			);
		}
	}

	const mapStateToProps = ( state ) => ({
		app: state.app,
		login: state.login
	});

	return connect(mapStateToProps)(UserIsAuthenticated);

}

