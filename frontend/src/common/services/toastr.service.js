import { toastr } from 'react-redux-toastr'; // Reference: https://github.com/diegoddox/react-redux-toastr
import 'react-redux-toastr/src/styles/index.scss'

class ToastrService {

	constructor() {

		if(!ToastrService.instance)
			ToastrService.instance = this;

		return ToastrService.instance;
	}

	success( message, title = "" ) {
		toastr.success( title, message );		
	}	

	warning( message, title = "" ) {
		toastr.warning( title, message );
	}

	error( message, title = "" ) {
		toastr.error( title, message );

	}

	confirm( message, 
			 options = {	onOk: () => console.log('OK: clicked'),
  							onCancel: () => console.log('CANCEL: clicked')} ){

		options.okText = options.okText || "Sim";
		options.cancelText = options.cancelText || "Não";

		toastr.confirm( message, options );
	}

}

let toastrService = new ToastrService();
Object.freeze(toastrService);

export default toastrService;