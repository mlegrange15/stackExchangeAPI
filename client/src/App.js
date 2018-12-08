import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {
  Jumbotron, Container, Row, Col, Button, Card, CardTitle
} from "reactstrap";
import './App.css';
import API from "./components/utils/API";
import Questions from "./components/Questions"
import Users from "./components/Users"

class App extends Component {
  state = {
    users: [],
    show: false
  };

  componentDidMount() {
    console.log('componentDidMount working');

    API.getUsers()
      .then(res => {
        this.setState({
          users: res.data,
        })
        console.log("componentDidMount",this.state.users);
      })
      .catch(err => console.log(err));
  }

  handleGetUsersClick = (e , users) => {
    e.preventDefault();
    console.log('working');
    console.log(users[0].user_id);
    let userID = users[0].user_id

    API.getUsersQuestions(userID)
      .then(res => {
        // this.setState({
        //   users: res.data
        // })
        console.log(res.data);

// LOOP OVER USERS
// FOR EACH USER MAKE API CALL PASSING THROUGH THEIR ID
// GET RES.DATA.LENGTH FOR EACH RESPONSE
// STORE THAT IN VARIABLES THAT
        // HOW MANY USERS HAVE ASKED A QUESTION (RETURN NOT EMPTY ARRAYS)
        // HOW MANY TOTAL QUESTIONS WERE ANSWERED
        // HOW MANY USERS ASKED MORE THAN 1 QUESTION (RES.DATA.LENGTH > 1)
// SET STATE WITH THESE VARIABLES AND PASS DOWN TO RENDER ON PAGE
// SET STATE TO SHOW OTHER COMPONENTS

// ******* ONCE DONE HERE TRY AND REFACTOR SO THAT THE QUESTIONS ATTACH AND STAY WITH THE APPROPRIATE USERS

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
          <Row>
            <Col sm="12">
              <Card body>
                <CardTitle><h2>Show me who joined Stack Overflow last month?</h2></CardTitle>
                <Button onClick={e => this.handleGetUsersClick(e, this.state.users)} color="info" size="lg" block>GO</Button>
              </Card>
            </Col>
          </Row>

          <Questions
            users={this.state.users}
            show={this.state.show}
          />

          <Users
            users={this.state.users}
            show={this.state.show}
          />

        </Container>
      </div>
    );
  }
}

export default App;
