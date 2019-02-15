import searchSrv from 'services/searchSrv';
import awEventEmitter from './awEventEmitter';

/********* SERVICE VARIABLES **********/

// let searchTerm = '';
const searchResults = [];

/********* SERVICE OBJECT **********/

const searchHelper = {
	
	// service specific functions

	getResults: function() {
		return searchResults;
	},

	clearResults: function() {
		searchResults.length = 0;
	}, 

	setResults: function(newSearchResults) {
		const self = this;

		self.clearResults();

		for (let i = 0; i < newSearchResults.length; i++) {
			// add validation check
			searchResults.push(newSearchResults[i]);
		}

		return self.getResults();
	},

	// request layer functions 

	getSearchResults: function(searchTerm) {
		const self = this;

		return searchSrv.get(searchTerm)
			.then(function(r) {
				self.emit('updated-results');
				return self.setResults(r);
			});
	}

};

// extend the service with the emitter to share data between components
Object.assign(searchHelper, awEventEmitter);

export default searchHelper;