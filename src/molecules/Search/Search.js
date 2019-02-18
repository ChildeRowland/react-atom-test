import React, { Component, Fragment } from 'react';

import searchStore from 'stores/searchStore';
import Button from 'atoms/Button/Button';
import SearchResults from 'molecules/SearchResults/SearchResults';
import './Search.scss';

class Search extends Component {

  constructor(props) {
  	super(props);
  	this.state = { 
  	  loading: false,	
  	  searchValue: '' 
  	};

  }

  updateInputValue = (event) => {
  	this.setState({
  		searchValue: event.target.value
  	});
  }

  search = () => {
  	const self = this;

  	self.setState(state => ({
  	  loading: true
  	}));

  	searchStore.getSearchResults(this.state.searchValue)
  		.then(function(r) {
  			console.log(r)
  			self.setState(state => ({
	  	    loading: false,
	  	    searchValue: ''
	  	  }));
  		});
  }

  clear = () => {
  	searchStore.setResults([]);
		this.setState(state => ({ searchValue: '' }));
	}	

  render () {
    return (
    	<Fragment>
	      <form>
	        <div className="form-row align-items-center">
	    	  <div className="col-auto">
		  	    <input 
		  	    	type="text" 
		  	    	value={this.state.searchValue} 
		  	    	onChange={event => this.updateInputValue(event)} 
		  	    	className="form-control" 
		  	    	id="searchInput" 
	  	    	/>
		  	  </div>
		  	  <div className="col-auto">
		  		<Button
		  	  	  type="submit" 
		  	      text="search"
		  	  	  alternateText="searching" 
		  	  	  loading={this.state.loading} 
		  	  	  clickAction={this.search}
		  	    >
		  		</Button>
		  		<Button
		  	  	  type="button" 
		  	      text="clear"
		  	      clickAction={this.clear}
		  	    >
		  		</Button>
	  		  </div>
	  		</div>
	      </form>
	      <SearchResults></SearchResults>
      </Fragment>
		);
  }
}

export default Search;