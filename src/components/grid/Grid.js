import React, { Component } from 'react';
import Card from '../grid-items/Card';

class Grid extends Component {
  render() {
    return (
      <div style={cardStyle}>
        {this.props.cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
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
