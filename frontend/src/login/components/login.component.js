import React from 'react';
import LoginForm from './loginForm.component';
import SignupForm from './signupForm.component';
import { connect } from 'react-redux';
import { push, replace } from 'react-router-redux';

//Internal dependencies
import * as actions from '../actions';
import { loadingWrapper } from 'appComponents';
import './login.style.css';

class LoginComponent extends React.Component {

	componentWillMount() {
		document.getElementsByTagName("html")[0].setAttribute("id", "login");
		document.getElementsByTagName("body")[0].className = "align";
		
	}

	componentDidUpdate() {
		
		const { login, location, app } = this.props;
		
		if( login.meta && login.meta.isAuthenticated || app && app.isAuthenticated ) {
			this.props.redirectToPage( location );
		}

		
	}

	componentWillUnmount() {
		document.getElementsByTagName("html")[0].removeAttribute("id");
		document.getElementsByTagName("body")[0].classList.remove("align");
	}

	render() {

		const { location } = this.props;
		let form = null;

		if( location.pathname.includes('/login') )
			form = <LoginForm onSubmit={ this.props.handleLoginSubmit } />
		else
			form = <SignupForm onSubmit={ this.props.handleSignupSubmit } />

		return (
			
			<div className="grid">
				{ form }				
			</div>
					  			  	
		);
	}
}

const mapStateToProps = ( state ) => (
	{
		loading: state.login.meta.isRequesting,
		login: state.login,
		app: state.app
	}
);

const mapDispatchToProps = ( dispatch ) => ({
	
	handleLoginSubmit: ( credentials ) => {
		dispatch( actions.loginRequest( credentials ) );
	},
	handleSignupSubmit: ( user ) => {
		dispatch( actions.signupRequest( user ) );
	},

	redirectToPage: ( location ) => {
		if(location.query.next)
			dispatch( replace( location.query.next ) );
		else
			dispatch( replace("/user/points") );
		
	}
});


export default connect(mapStateToProps, mapDispatchToProps)(loadingWrapper(LoginComponent));