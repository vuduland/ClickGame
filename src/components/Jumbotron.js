import React from 'react';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-dom';
function Jumbotron() {
  return (
    <div className='jumbotron'>
      <h1>Your Project</h1>
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
