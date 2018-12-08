
import React, { Component } from 'react';
import {
    Row, Col, Card
  } from "reactstrap";
class Questions extends Component {
  render() {
    if (!this.props.show) return null    
    return (    
        <Row>
        <Col sm="4">
          <Card className="text-white bg-secondary" body>
            Who has asked a question?
          </Card>
        </Col>
        <Col sm="4">
          <Card className="text-white bg-secondary" body>
            How many have been answered?
          </Card>
        </Col>
        <Col sm="4">
          <Card className="text-white bg-secondary" body>
            Who has asked multiple?
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Questions;
