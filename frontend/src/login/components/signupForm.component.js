import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router';

import './login.style.css';

class SignupForm extends React.Component {

	render() {
		
		const { handleSubmit } = this.props;
		return (
			<div>
				
				<form onSubmit={ handleSubmit } className="form login">
					<div className="form__field">
						
						<label htmlFor="username" className="input">
							<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
						</label>
						<Field className="form__input" id="username" name="username" component="input" type="text" placeholder="Username"/>
					</div>
					<div className="form__field">
						
						<label htmlFor="email" className="input">
							<span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
						</label>
						<Field className="form__input" id="email" name="email" component="input" type="text" placeholder="Email"/>
					</div>
					<div className="form__field">
						<label htmlFor="password" className="input">
							<span className="glyphicon glyphicon-lock" aria-hidden="true"></span>
						</label>
						<Field className="form__input" id="password" name="password" component="input" type="password" placeholder="Password" />
					</div>
					
					<div className="form__field">
						<input type="submit" value="Entrar" />
					</div>
				</form>
				
				<p className="text--center"><Link to="/login">I want to login!</Link></p>
			
			</div>
		);
	}
}

SignupForm = reduxForm({
	form: 'signupForm' //unique name
})(SignupForm);

export default SignupForm;