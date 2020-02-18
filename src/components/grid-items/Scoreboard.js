import React from 'react';

function Scoreboard(props) {
  return (
    <div className='all-center'>
      <h1 className='text-center'>RSA Clicky Game</h1>
      <h4 className='text-center'>High Score: {props.highScore}</h4>
      <h4 className='text-center'>Current Score: {props.currentScore}</h4>
    </div>
  );
}

export default Scoreboard;
