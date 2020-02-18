import React, { Component } from 'react';
import Gridboard from './Gridboard';
import Scoreboard from '../grid-items/Scoreboard';
import images from '../grid-items/imageList.json';
import '../../App.css';

class Grid extends Component {
  state = {
    grid: images,
    justClicked: '',
    clicked: [],
    scoreCurrent: 0,
    highScore: 0,
    outcome: 1
  };
  handleClick = (id, name) => {
    const clickedArr = [...this.state.clicked];
    let score = this.state.scoreCurrent;
    let highScoreCurrent = this.state.highScore;
    if (highScoreCurrent <= score) {
      highScoreCurrent = score;
    }
    if (clickedArr.includes(id)) {
      this.setState({
        highScore: highScoreCurrent,
        scoreCurrent: 0,
        justClicked: name,
        clicked: [],
        grid: this.randomizeArr(),
        outcome: 0
      });
    } else {
      score++;
      clickedArr.push(id);

      this.setState({
        scoreCurrent: score,
        clicked: clickedArr,
        justClicked: name,
        grid: this.randomizeArr(),
        outcome: 1
      });
    }
  };

  randomizeArr() {
    let tempArr = [...images];
    for (let i = tempArr.length - 1; i > 0; --i) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = tempArr[i];
      tempArr[i] = tempArr[j];
      tempArr[j] = temp;
    }
    return tempArr;
  }

  render() {
    return (
      <div>
        <div>
          <Scoreboard
            highScore={this.state.highScore}
            currentScore={this.state.scoreCurrent}
          />
          <Gridboard
            justClicked={this.state.justClicked}
            grid={this.state.grid}
            handleClick={this.handleClick}
            outcome={this.state.outcome}
            style={cardStyle}
          />
        </div>
      </div>
    );
  }
}

const cardStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem'
};

export default Grid;
