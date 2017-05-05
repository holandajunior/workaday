import React from 'react';
import { connect } from 'react-redux';

export default ( Component ) => {

	return class extends React.Component {
		
		componentDidUpdate() {
			
			
			if(!this.props.hasOwnProperty('loading')) {
				throw new Error("Your component wrapped with LoadingWrapper is missing the 'loading' property in the props");
			}


			this.toggleLoading( this.props.loading );
		}


		toggleLoading( isRequesting ) {

			const loading = document.getElementById("loading");
			if( isRequesting )
				loading.classList.add("show");
			else
				loading.classList.remove("show");
		}

		render() {
			
			return (
				<Component toggleLoading={this.toggleLoading} {...this.props} />
			);
		}

	}


}