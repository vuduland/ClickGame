import React from 'react';
import Image from './components/Images/Images';
import Button from '@material-ui/core/Button';
import Jumbotron from './components/Jumbotron/Jumbotron';
import ImageList from './components/Material/Material';
function App() {
  return (
    <div>
      <Jumbotron>
        <Button variant='contained' color='primary'>
          Hello World
        </Button>
        <ImageList />
        <Image />
      </Jumbotron>
    </div>
  );
}

export default App;
