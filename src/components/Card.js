import React from 'react';
import Media from 'react-bootstrap/Media';
import { Button } from 'react-bootstrap';

function Card() {
  return (
    <Media>
      <Button>
        <img
          width={64}
          height={64}
          className='mr-3'
          src='logo512.png'
          alt='Card'
        />
      </Button>
    </Media>
  );
}

export default Card;
