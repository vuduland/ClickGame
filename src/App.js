import React from 'react';
import Scores from './components/Scores.js';
import Jumbotron from './components/Jumbotron';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className='container'>
      <Row />
      {/* <Navbar /> */}
      {/* <Images /> */}
      <Button> BUTTON ME </Button>
      <Scores />
      <Jumbotron />
    </div>
  );
}

export default App;
