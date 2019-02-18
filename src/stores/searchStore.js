import searchGateway from 'gateways/searchGateway';
import awEventEmitter from 'core/awEventEmitter';

/********* SERVICE VARIABLES **********/

// let searchTerm = '';
const searchResults = [];

/********* SERVICE OBJECT **********/

const searchStore = {
	
	// store functions

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

		self.emit('updated-results');

		return self.getResults();
	},

	// gateway functions 

	getSearchResults: function(searchTerm) {
		const self = this;

		return searchGateway.get(searchTerm)
			.then(function success (r) {
				return self.setResults(r);
			}, function error (e) {
				console.log(e);
			});
	}

};

// extend the service with the emitter to share data between components
Object.assign(searchStore, awEventEmitter);

export default Object.freeze(searchStore);