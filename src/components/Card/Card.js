import React from 'react';
import Media from 'react-bootstrap/Media';

function Card() {
  return (
    <Media>
      <img
        width={64}
        height={64}
        className='mr-3'
        src='logo512.png'
        alt='Card'
      />
    </Media>
  );
}

export default Card;
