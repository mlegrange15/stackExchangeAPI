import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle
} from "reactstrap";
import "./App.css";
import API from "./components/utils/API";
import Questions from "./components/Questions";
import Users from "./components/Users";
import Stats from "./components/Stats";

class App extends Component {
  state = {
    users: [],
    showUsers: false,
    showStats: false,
    questionsData: []
  };

  handleGetUsersClick = e => {
    e.preventDefault();
    API.getUsers()
      .then(res => {
        this.setState({
          users: res.data,
          showUsers: true
        });
      })
      .catch(err => console.log(err));
  };

  handleGetQuestionsClick = (e, users) => {
    e.preventDefault();

    let userIDs = "";

    for (let i = 0; i < users.length; i++) {
      userIDs += users[i].user_id + ";";
    }

    userIDs = userIDs.slice(0,-1)

    console.log("IDS array post slice", userIDs);

    this.callForQuestions(userIDs);
    return this.setState({
      showStats: true
    });
  };

  callForQuestions = userIDs => {

    API.getUsersQuestions(userIDs)
      .then(res => {
        let userQuestions = res.data;
        
        this.setState({
          questionsData: [userQuestions]
        });

      })
      .catch(err => console.log(err));
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
                <Button
                  onClick={e => this.handleGetUsersClick(e)}
                  color="info"
                  size="lg"
                  block
                >
                  GO
                </Button>
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

          <Users users={this.state.users} showUsers={this.state.showUsers} />
        </Container>
      </div>
    );
  }
}

export default App;
