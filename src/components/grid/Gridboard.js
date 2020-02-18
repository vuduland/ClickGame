import React from 'react';
import Card from '../grid-items/Card';

function Gridboard(props) {
  const pro = console.log(props.grid[1].image);
  return (
    <div className='col-sm-12'>
      <div className='row'>
        <div className='col-sm-8'>
          <div className='row r-1'>
            {props.grid.map(images => (
              <Card
                id={images.id} //or grids and grid
                key={images.id}
                name={images.name}
                img={images.image}
                handleClick={props.handleClick}
                outcome={props.outcome}
              >
                {pro}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gridboard;
