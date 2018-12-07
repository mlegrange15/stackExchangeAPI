import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {
  Jumbotron, Container, Row, Col, Button, Card, CardTitle, CardHeader
} from "reactstrap";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Search Stack Exchange</h1>
            <p className="lead">Click the button below to get started!</p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col sm="12">
              <Card body>
                <CardTitle>Who joined StackOverflow last month?</CardTitle>
                <Button color="info" size="lg" block>Show me</Button>
              </Card>
            </Col>
          </Row>
          <Row>
      <Col sm="4">
        <Card body>
        <CardHeader>Who has asked a question?</CardHeader>
          <CardTitle>Special Title Treatment</CardTitle>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
        <CardHeader> How many of those questions have been answered?</CardHeader>
          <CardTitle>Special Title Treatment</CardTitle>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
      <Col sm="4">
        <Card body>
        <CardHeader>Who has asked multiple questions?</CardHeader>
          <CardTitle>Special Title Treatment</CardTitle>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
        
        </Container>
      </div>
    );
  }
}

export default App;
