import React from 'react';
import Grid from './Grid';
import Card from '../grid-items/Card';

function Gridboard(props) {
  return (
    <div className='col-sm-8'>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='row m-2 mb-3'>
            {props.grid.map(images => (
              <Card
                id={images.id} //or grids and grid
                key={images.id}
                name={images.name}
                img={images.image}
                handleClick={images.handleClick}
                outcome={images.outcome}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gridboard;