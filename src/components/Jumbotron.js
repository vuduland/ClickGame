import React from 'react';
import Card from './Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

// import Col from 'react-dom';
function Jumbotron() {
  // handleClick(evt) {
  //   let letter = evt.target.value;
  //   this.setState(st => ({
  //     guessed: st.guessed.add(letter),
  //     mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
  //   }));
  // }
  return (
    <div className='jumbotron'>
      <h1>Your Project</h1>

      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Card />
            {/* <img src={this.props.images[0]} alt='meaningful text' /> */}
          </Col>
          <Col xs={6} md={4}>
            <Card />
          </Col>
          <Col xs={6} md={4}>
            <Card />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Card />
          </Col>
          <Col xs={6} md={4}>
            <Card />
          </Col>
          <Col xs={6} md={4}>
            <Card />
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <Card />
          </Col>
          <Col xs={6} md={4}>
            <Card />
          </Col>
          <Col xs={6} md={4}>
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Jumbotron;

// import React from 'react';
