import React from 'react';
import Card from '../Card/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Images from '../Images/Images';

// import Button from 'react-dom';
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
      <Images />
      <Container>
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
