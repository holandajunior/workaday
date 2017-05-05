import React from 'react';
import ReduxToastr from 'react-redux-toastr'

//Internal dependencies
import './app.style.css';


export default class App extends React.Component {
	
	render() {
		
		return (
			<div>
				{ <div id="loading" className="loading">Loading&#8230;</div> }
				<ReduxToastr timeOut={4000} newestOnTop={false} preventDuplicates={true} position="top-right"
      						 transitionIn="fadeIn" transitionOut="fadeOut" progressBar/>
				{ this.props.children }				
			</div>
		);
	}
}


