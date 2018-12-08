import React, { Component } from "react";
import { Row, Col, Card, CardTitle } from "reactstrap";
class Questions extends Component {
  render() {
    if (!this.props.showStats) return null;

    let data = this.props.questionsData;

    let TotalQuestionsAsked = 0;
    let UsersAskedQuestions = 0;
    let QuestionsAnswered = 0;
    let UsersAskedMultipleQuestions = 0;

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);

      let userTotal = data[i].length;

      TotalQuestionsAsked = TotalQuestionsAsked + userTotal;

      if (userTotal > 1) {
        UsersAskedQuestions = UsersAskedQuestions + 1;
        UsersAskedMultipleQuestions = UsersAskedMultipleQuestions + 1;

        for (let i = 0; i < userTotal; i++) {
          if (data[i].is_answered === true) {
            QuestionsAnswered = QuestionsAnswered + 1;
          }
        }
      } else if (userTotal > 0) {
        UsersAskedQuestions = UsersAskedQuestions + 1;
      }
    }
    return (
      <Row className="mb-3">
        <Col sm="3">
          <Card body>
            <CardTitle>Total Questions Asked:</CardTitle>
            {TotalQuestionsAsked}
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <CardTitle>Users Asked Questions:</CardTitle>
            {UsersAskedQuestions}
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <CardTitle>Users Asked Multiple Questions:</CardTitle>
            {UsersAskedMultipleQuestions}
          </Card>
        </Col>
        <Col sm="3">
          <Card body>
            <CardTitle>Questions Answered:</CardTitle>
            {UsersAskedMultipleQuestions}
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Questions;
