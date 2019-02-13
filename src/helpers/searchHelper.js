import searchSrv from 'services/searchSrv';

const searchHelper = {
	
	searchTerm: '',
	searchResults : [],

	getSearchResults: function () {
		return this.searchResults;
	},

	clearSearchResults: function () {
		this.searchResults.length = 0;
	}, 

	setSearchResults: function (newSearchResults) {
		const self = this;

		self.clearSearchResults();

		for (let i = 0; i < newSearchResults.length; i++) {
			// add validation check
			self.searchResults.push(newSearchResults[i]);
		}

		return self.getSearchResults();
	},

	getResults: function (searchTerm) {
		const self = this;

		return searchSrv.getResults(searchTerm)
		.then(function(r) {
			return self.setSearchResults(r);
		});
	}

}

export default searchHelper;