import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import "./App.css";
import API from "./components/utils/API";
import Questions from "./components/Questions";
import Users from "./components/Users";
import Stats from "./components/Stats";

class App extends Component {
  state = {
    users: [],
    date: "2018-12-01",
    numUserSearch: 10,
    showUsers: false,
    showStats: false,
    questionsData: []
  };

  // Handles the initial search for users.
  handleGetUsersClick = (e, num, date) => {
    e.preventDefault();
    // Calls Stack Exchange API for given params num results and start date
    API.getUsers(num, date)
      .then(res => {
        this.setState({
          users: res.data,
          showUsers: true
        });
      })
      .catch(err => console.log(err));
  };

  // Handles the get more info on questions relevant to current users button click
  handleGetQuestionsClick = (e, users) => {
    e.preventDefault();
    let userIDs = "";
    // Loop all users, grab their ids, put in string needed for api call
    for (let i = 0; i < users.length; i++) {
      userIDs += users[i].user_id + ";";
    }
    userIDs = userIDs.slice(0, -1);
    // Give function holding api call the string of ids needed
    this.callForQuestions(userIDs);
    return this.setState({
      showStats: true
    });
  };

  // Handles api call for questions/{ids}
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

  // Updates the data form change
  updateDate = e => {
    this.setState({
      date: e.target.value
    });
  };
  // updates the num of results wanted form change
  updatenumUserSearch = e => {
    this.setState({
      numUserSearch: e.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <Jumbotron className="shadow-lg mb-5 text-center" fluid>
          <Container fluid>
            <h1 className="display-3">Search Stack Exchange</h1>
          </Container>
        </Jumbotron>
        <Container>
          <Row className="mb-3">
            <Col sm="12">
              <Card body>
                <CardTitle>Search Stack Overflow Users:</CardTitle>
                <Form>
                  <FormGroup>
                    <Label for="exampleSelect">
                      {" "}
                      <h6>Number of users to return:</h6>
                    </Label>
                    <Input
                      onChange={e => this.updatenumUserSearch(e)}
                      type="select"
                      name="select"
                      id="exampleSelect"
                      value={this.state.numUserSearch}
                    >
                      <option>5</option>
                      <option>10</option>
                      <option>15</option>
                      <option>20</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleSelect">
                      {" "}
                      <h6>Users sign up date:</h6>
                    </Label>
                    <Input
                      onChange={e => this.updateDate(e)}
                      type="date"
                      id="start"
                      name="trip-start"
                      value={this.state.date}
                      min="2018-01-01"
                      max="2018-12-31"
                    />{" "}
                  </FormGroup>
                  <Button
                    onClick={e =>
                      this.handleGetUsersClick(
                        e,
                        this.state.numUserSearch,
                        this.state.date
                      )
                    }
                    color="info"
                    size="lg"
                    block
                  >
                    GO
                  </Button>{" "}
                </Form>
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
