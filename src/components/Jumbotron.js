import React from 'react';
import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Button from 'react-dom';
function Jumbotron() {
  return (
    <div className='jumbotron'>
      <Container>
        <Row>
          <h1>Your Project</h1>
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
