import React, { Component } from 'react';

import searchHelper from 'helpers/searchHelper';

class SearchResults extends Component {

	constructor(props) {
		super(props);
		this.state = { results: [] };
		searchHelper.on('updated-results', () => {
			this.setState({ results: searchHelper.getResults() });
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