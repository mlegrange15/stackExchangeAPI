import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {
  Jumbotron, Container, Row, Col, Button, Card, CardTitle
} from "reactstrap";
import './App.css';
import API from "./components/utils/API";
import Questions from "./components/Questions"
import Users from "./components/Users"
import Stats from "./components/Stats"

class App extends Component {
  state = {
    users: [],
    showUsers: false,
    showStats: false,
    questionsData: []
  };

  handleGetUsersClick = (e) => {
    e.preventDefault();
    API.getUsers()
      .then(res => {
        this.setState({
          users: res.data,
          showUsers: true
        })
      })
      .catch(err => console.log(err));
  };

  handleGetQuestionsClick = (e, users) => {
    e.preventDefault();
    let questionsDataArray = []

    // let questionsCallData = {

    //   TotalQuestionsAsked: 0,
    //   UsersAskedQuestions: 0,
    //   QuestionsAnswered: 0,
    //   UsersAskedMultipleQuestions: 0,
    // }

    for (let i = 0; i < users.length; i++) {
      let userID = users[i].user_id
      let questionsData = this.callForQuestions(userID)
      questionsDataArray.push(questionsData)
      console.log(questionsData.questionsCallData);

    }
    console.log(questionsDataArray[4]);

    for (let i = 0; i < questionsDataArray.length; i++) {
      // console.log(questionsDataArray[i].TotalQuestionsAsked);
      // console.log(questionsDataArray[i].UsersAskedMultipleQuestions);
      // console.log(questionsDataArray[i].UsersAskedQuestions);
    }



    return this.setState({
      // questionsData: questionsDataArray,
      showStats: true,
    })

  };

  callForQuestions = (userID) => {

    let questionsCallData = {

      TotalQuestionsAsked: 0,
      UsersAskedQuestions: 0,
      QuestionsAnswered: 0,
      UsersAskedMultipleQuestions: 0,
    }

    API.getUsersQuestions(userID)
      .then(res => {
        let userTotalQuestions = res.data.length

        questionsCallData.TotalQuestionsAsked += userTotalQuestions

        if (userTotalQuestions > 1) {
          questionsCallData.UsersAskedQuestions++
          questionsCallData.UsersAskedMultipleQuestions++

          for (let i = 0; i < userTotalQuestions; i++) {
            if (res.data[i].is_answered === true) {
              questionsCallData.QuestionsAnswered++
            }
          }
        } else if (userTotalQuestions > 0) {
          questionsCallData.UsersAskedQuestions++
        }
        // ******* ONCE DONE HERE TRY AND REFACTOR SO THAT THE QUESTIONS ATTACH AND STAY WITH THE APPROPRIATE USERS

        console.log(questionsCallData.TotalQuestionsAsked);
        
      })
      .catch(err => console.log(err));

    return questionsCallData
  };

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
          <Row className="mb-3">
            <Col sm="12">
              <Card body>
                <CardTitle>Search Stack Overflow Users:</CardTitle>
                <h6>Show me who joined Stack Overflow last month?</h6>
                <Button onClick={e => this.handleGetUsersClick(e)} color="info" size="lg" block>GO</Button>
              </Card>
            </Col>
          </Row>

          <Questions
            users={this.state.users}
            showUsers={this.state.showUsers}
            handleGetQuestionsClick={this.handleGetQuestionsClick}
          />

          <Stats
            showStats={this.state.showStats}
            questionsData={this.state.questionsData}
          />

          <Users
            users={this.state.users}
            showUsers={this.state.showUsers}
          />

        </Container>
      </div>
    );
  }
}

export default App;
