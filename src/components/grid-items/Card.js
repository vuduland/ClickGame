import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ cards: { src } }) => {
  // static propTypes = {};

  return (
    <div className='card text-center'>
      <button>
        <img
          src={src}
          alt='Card'
          className='mr-3'
          style={{ width: 45, height: 90 }}
        />
        {/* <img src={} alt='' className='round-img' style={{ width: '100px' }} /> */}
      </button>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.object.isRequired
};

export default Card;
