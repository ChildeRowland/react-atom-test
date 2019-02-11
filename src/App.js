import React, { Component } from 'react';
import './App.css';
import AwButton from './atoms/AwButton/AwButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AwButton text="click it"></AwButton>
        </header>
      </div>
    );
  }
}

export default App;
