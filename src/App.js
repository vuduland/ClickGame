import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Grid from './components/grid/Grid';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Grid />
        </div>
      </div>
    );
  }
}

export default App;
