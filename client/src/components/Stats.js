import React, { Component } from "react";
import { Row, Col, Card, CardTitle } from "reactstrap";
class Questions extends Component {
  // For each user id attached to the current questions go through and find user ids who asked more than on question
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

    let TotalQuestionsAsked = 0;
    let UsersAskedQuestions = 0;
    let QuestionsAnswered = 0;
    let UsersAskedMultipleQuestions = 0;

    let filteredIdsAskedQuestions = [];
    let allIdsAskedQuestions = [];

    // Loop over data
    for (let i = 0; i < data.length; i++) {
      //Strange data structure response so loop again to drill into needed questions data
      for (let j = 0; j < data[0].length; j++) {
        TotalQuestionsAsked = data[0].length;
        let currentQuestion = data[0][j];
        let ownerAsked = data[0][j].owner.user_id;
        allIdsAskedQuestions.push(ownerAsked);

        // Grab all users who at aleast asked a question
        if (!filteredIdsAskedQuestions.includes(ownerAsked)) {
          filteredIdsAskedQuestions.push(ownerAsked);
        }
        // Grab all questions that have an answer
        if (currentQuestion.is_answered === true) {
          QuestionsAnswered = QuestionsAnswered + 1;
        }
      }
      UsersAskedQuestions = filteredIdsAskedQuestions.length;

      // Set duplicates to the return value from findUserAskedMulitple. Any duplicate found means that user asked multiple
      let duplicates = this.findUserAskedMulitple(allIdsAskedQuestions);
      UsersAskedMultipleQuestions = duplicates.length;
    }

    return (
      <Row className="mb-3">
        <Col sm="3">
          <Card className="shadow-lg" body>
            <CardTitle>Total Number Of Questions Asked:</CardTitle>
            {TotalQuestionsAsked}
          </Card>
        </Col>
        <Col sm="3">
          <Card className="shadow-lg" body>
            <CardTitle>How Many Users Asked a Question:</CardTitle>
            {UsersAskedQuestions}
          </Card>
        </Col>
        <Col sm="3">
          <Card className="shadow-lg" body>
            <CardTitle>How Many Asked Multiple Questions:</CardTitle>
            {UsersAskedMultipleQuestions}
          </Card>
        </Col>
        <Col sm="3">
          <Card className="shadow-lg" body>
            <CardTitle>How Many Questions Were Answered:</CardTitle>
            {QuestionsAnswered}
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Questions;
