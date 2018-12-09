import React, { Component } from "react";
import { Row, Col, Card, CardTitle } from "reactstrap";
class Questions extends Component {

  findUserAskedMulitple = allIdsAskedQuestions => {
    let usersWhoAskedMultiple = [];

    allIdsAskedQuestions.forEach(function(element, index) {
      // Find if there is a duplicate or not
      if (allIdsAskedQuestions.indexOf(element, index + 1) > -1) {
        // Find if the element is already in the usersWhoAskedMultiple array or not
        if (usersWhoAskedMultiple.indexOf(element) === -1) {
          usersWhoAskedMultiple.push(element);
        }
      }
    });

    return usersWhoAskedMultiple;
  };

  render() {
    if (!this.props.showStats) return null;

    let data = this.props.questionsData;

    console.log("Current DATA", data);

    let TotalQuestionsAsked = 0;
    let UsersAskedQuestions = 0;
    let QuestionsAnswered = 0;
    let UsersAskedMultipleQuestions = 0;

    let filteredIdsAskedQuestions = [];

    let allIdsAskedQuestions = [];

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[0].length; j++) {
        TotalQuestionsAsked = data[0].length;
        let currentQuestion = data[0][j];
        let ownerAsked = data[0][j].owner.user_id;
        console.log("ownerAsked", ownerAsked);

        allIdsAskedQuestions.push(ownerAsked);

        if (!filteredIdsAskedQuestions.includes(ownerAsked)) {
          filteredIdsAskedQuestions.push(ownerAsked);
        }

        if (currentQuestion.is_answered === true) {
          QuestionsAnswered = QuestionsAnswered + 1;
        }
      }

      UsersAskedQuestions = filteredIdsAskedQuestions.length;

      let duplicates = this.findUserAskedMulitple(allIdsAskedQuestions)

      UsersAskedMultipleQuestions = duplicates.length
      
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
            {QuestionsAnswered}
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Questions;
