import React from 'react';
// import Image from './components/Images/Images';
// import Button from '@material-ui/core/Button';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import ImageList from './Components/Material/Material';
import images from './Components/ListItems/Item';
function App() {
  return (
    <div>
      <Jumbotron>
        {/* <Button variant='contained' color='primary'> */}
        {/* Hello World */}
        {/* </Button> */}
        <ImageList />
        <images />
        {/* <Image /> */}
      </Jumbotron>
    </div>
  );
}

export default App;
