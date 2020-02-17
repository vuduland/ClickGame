import React from 'react';
// import Navbar from './components/Navbar';
import Scores from './components/Scores.js';
import Jumbotron from './components/Jumbotron';
// import Navbar from './components/Navbar';
import Row from 'react-bootstrap/Row';
import Button from '@material-ui/core/Button';
import Images from './components/Images';

function App() {
  return (
    <div className='container'>
      <Row />
      {/* <Navbar /> */}
      <Images />
      <Button> BUTTON ME </Button>
      <Scores />
      <Jumbotron />
    </div>
  );
}

export default App;
