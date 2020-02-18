import React from 'react';

const Card = props => {
  console.log(props.img + 'props.img');
  return (
    <div className='card'>
      <img
        src={props.img}
        alt={props.name}
        key={props.id}
        onClick={() => props.handleClick(props.id, props.name)}
      />
    </div>
  );
};

export default Card;
