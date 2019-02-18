import React, { Component } from 'react';

import searchStore from 'stores/searchStore';

class SearchResults extends Component {

	constructor(props) {
		super(props);
		this.state = { results: [] };
		searchStore.on('updated-results', () => {
			this.setState({ results: searchStore.getResults() });
		});
	}

	render() {
		return(
			<ul className="list-group">
				{this.state.results.map((r,i) => { 
					return (
						<li 
							key={i} 
							className="list-group-item list-group-item-secondary">
							{r}
						</li>
					);
				})}
			</ul>
		);
	}

}

export default SearchResults;