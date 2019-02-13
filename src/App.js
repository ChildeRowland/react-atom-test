import React, { Component } from 'react';
import './App.scss';
import Search from './molecules/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Search></Search>
        </header>
      </div>
    );
  }
}

export default App;
