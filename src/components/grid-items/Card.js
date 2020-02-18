import React from 'react';

// { images: { id, name, image } }
const Card = props => {
  return (
    <div className='card text-center'>
      <img
        src={props.image}
        alt={props.name}
        key={props.id}
        // className='mr-3'
        style={{ width: 45, height: 90 }}
        onClick={() => props.handleClick(props.id, props.name)}
      />
    </div>
  );
};

// Card.propTypes = {
//   images: PropTypes.object.isRequired
// };

export default Card;
