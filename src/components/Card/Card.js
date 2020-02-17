import React from './node_modules/react';
import Media from './node_modules/react-bootstrap/Media';

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
