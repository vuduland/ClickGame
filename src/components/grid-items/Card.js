import React from 'react';

// { images: { id, name, image } }
const Card = props => {
  console.log(props.img + 'props.img');
  return (
    <div className='card'>
      <img
        src={props.img}
        alt={props.name}
        key={props.id}
        // className='mr-3'
        // style={{ width: 45, height: 90 }}
        onClick={() => props.handleClick(props.id, props.name)}
      />
    </div>
  );
};

// Card.propTypes = {
//   images: PropTypes.object.isRequired
// };

export default Card;
