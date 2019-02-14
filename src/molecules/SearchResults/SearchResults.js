import React, { Component } from 'react';

import searchHelper from 'helpers/searchHelper';

class SearchResults extends Component {

	constructor(props) {
		super(props);
		this.state = { searchResults: [] };
		searchHelper.searchEmitter.on('updated-results', () => {
			this.setState({ searchResults: searchHelper.getSearchResults() });
		});
	}

	render() {
		return(
			<ul>
				{this.state.searchResults.map((r,i) => <li key={i}>{r}</li>)}
			</ul>
		);
	}

}

export default SearchResults;