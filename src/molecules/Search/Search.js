import React, { Component } from 'react';

import Button from 'atoms/Button/Button'
import './Search.scss'

// for testing - remove
import searchSrv from 'requests/searchRequest';

class Search extends Component {

  constructor(props) {
  	super(props);
  	this.state = { 
  	  loading: false,	
  	  searchValue: '' 
  	};

  	this.search = this.search.bind(this);
  }

  search() {
  	const self = this;

  	self.setState(state => ({
  	  loading: true,
  	  searchValue: ''
  	}));

  	searchSrv.getResults()
  		.then(function(r) {
  			console.log(r)
  			self.setState(state => ({
	  	    loading: false
	  	  }));
  		});
  }

  render () {
    return (
      <form>
        <div className="form-row align-items-center">
    	  <div className="col-auto">
	  	    <input type="text" value={this.state.value} className="form-control" id="searchInput" />
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