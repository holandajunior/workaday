import axios from 'axios';

// Internal dependencies
import toastr from './toastr.service';
import * as messages from '../messages';
import { $localStorage } from 'appServices';

const UNAUTHORIZED = 401;

const OK = "OK";
const WARN = "WARN";
const ERROR = "ERROR";

const messageType = {
	[OK]: toastr.success,
	[ERROR]: toastr.error,
	[WARN]: toastr.warning,
	
};

const showMessage = ( type, msg ) => {
		
	const toastrMsg = messageType[type];
	if(toastrMsg)
		toastrMsg(msg);
	else
		toastrMsg(messages.DEFAULT_ERROR_MSG);
};


/**
 * Request handler
 *
 * @param      {Function}  method   request method to be applied: get, post, ...
 * @param      {String}    url      The url
 * @param      {Object}    data     The data
 * @param      {Object}    options  { handleError: boolean, successMsg: string }
 * @return     {Object}    An object with rest response being succesful with data or failed with error
 */
const requestHandler = ( method, url, options, data ) => {
	
	options = Object.assign( {}, options, { handleError: true } )
	
	let promise;

	if( data )
		promise = method(url, data, options);
	else
		promise = method(url, options);

	return promise
				.then( response => {
					
					if( options.successMsg )
						showMessage( OK, options.successMsg );
					
					console.log( response );

					return {
						data: response.data,
						status: response.status
					} 
				})
				.catch( error => {

					if (error.response) {

						const response = error.response.data;

						if(options.handleError)	
							showMessage( response.meta.error.level, response.meta.error.error_message  );	
							
						if( response.meta.code ==  UNAUTHORIZED ){
							$localStorage.remove( app.storage.USER_TOKEN );
						}		

				    	return response;

				    } 

					return error;
				} );
} 

class HttpService {

	constructor() {
		
		if(!HttpService.instance){
			HttpService.instance = this;

			// Add a request interceptor
			axios.interceptors.request.use(function (config) {
			    
			    // Do something before request is sent
			    if( $localStorage.get( app.storage.USER_TOKEN ) ){
			    	config.headers = Object.assign( {}, 
			    									config.headers, 
			    									{ 'X-AUTH-TOKEN': `Bearer ${$localStorage.get( app.storage.USER_TOKEN ).token}` } )
			    
			    } 

			    return config;

			  }, function (error) {
			    
			    // Do something with request error
			    return Promise.reject(error);
			  });
		}

		return HttpService.instance;			
	}
	
	get( url, data, options ) {
		return requestHandler( axios.get, url, options, data );
	}

	post( url, data, options ) {
		return requestHandler( axios.post, url, options, data );
	}

	delete( url, options ) {
		return requestHandler( axios.delete, url, options );	
	}


}


let httpService = new HttpService();
Object.freeze(httpService);

export default httpService;
