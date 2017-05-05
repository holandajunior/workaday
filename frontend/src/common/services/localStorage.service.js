
// It pretends to be a LocalStorage when window.localStorage is not provided
class LocalStorage {

	constructor() {
		this.store = new Map();
	}
	
	setItem( key, data ) {
		this.store.set( key, data );
	}

	getItem( key ) {
		return this.store.get( key );
	}

	removeItem( key ) {
		this.store.delete( key );
	}

}


class LocalStorageService {

	constructor() {

		if(!LocalStorageService.instance){

			this.localStorage = window.localStorage;
			
			if(!this.localStorage)
				this.localStorage = new LocalStorage();

			LocalStorageService.instance = this;
		}

		return LocalStorageService.instance;
	}

	save( key, data ) {
	
		return LocalStorageService.instance.execute( () => {
			LocalStorageService.instance.localStorage.setItem( key, JSON.stringify(data) )
			return data; 
		} );

	}

	remove( key ) {
		
		return LocalStorageService.instance.execute( () => {
			LocalStorageService.instance.localStorage.removeItem( key );
		} );

	}

	get( key ) {
		const data = LocalStorageService.instance.localStorage.getItem( key )
		if(data)
			return JSON.parse(data);
		
		return data;
	
	}

	execute( action ) {
		
		const promise = new Promise( function( resolve, reject ){

			try {
				resolve(action());
			} catch (error) {
				reject("LocalStorage error: " + error);
			}

		} );

		return promise;
	}


}

let localStorageService = new LocalStorageService();
Object.freeze(localStorageService);

export default localStorageService;


