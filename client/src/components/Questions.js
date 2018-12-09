import React, { Component } from "react";
import { Row, Col, Card, CardTitle, Button } from "reactstrap";
class Questions extends Component {
  render() {
    if (!this.props.showUsers) return null;
    return (
      <Row className="mb-3">
        <Col sm="12">
          <Card body>
            <CardTitle>Get more information on:</CardTitle>
            <Row>
              {/* Buttons to filter current users info. Make new api calls looking for questions, answers, commetns etc. Currently on questions */}
              <Col sm="4">
                <Button
                  onClick={e =>
                    this.props.handleGetQuestionsClick(e, this.props.users)
                  }
                  color="info"
                >
                  <p>Questions</p>
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Questions;
