import React from 'react';
import PropTypes from 'prop-types';

const Cardbutton = props => {
  // static propTypes = {};

  return (
    <div className='card text-center'>
      <a href={} className='btn my-1'>
        <img src={} alt='' className='round-img' style={{ width: '100px' }} />
      </a>
    </div>
  );
};

Cardbutton.propTypes = {
  img: PropTypes.object.isRequired
};

export default Cardbutton;
