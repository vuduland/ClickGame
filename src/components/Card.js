import React from 'react';
import Media from 'react-bootstrap/Media';

function Card() {
  return (
    <Media>
      <img
        width={64}
        height={64}
        className='mr-3'
        src='holder.js/64x64'
        alt='Generic placeholder'
      />
    </Media>
  );
}

export default Card;
