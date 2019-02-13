import React, { Component } from 'react';

import Button from 'atoms/Button/Button'
import './Search.scss'

// for testing - remove
import searchHelper from 'helpers/searchHelper';

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

  	searchHelper.getResults(this.state.searchValue)
  		.then(function(r) {
  			console.log(r)
  			self.setState(state => ({
	  	    loading: false,
	  	    searchValue: ''
	  	  }));
  		});
  }

  render () {
    return (
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
  		  </div>
  		</div>
      </form>
		);
  }
}

export default Search;