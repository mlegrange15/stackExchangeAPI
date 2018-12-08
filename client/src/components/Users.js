
import React, { Component } from 'react';
import {
    Row, Col, Card, CardImg, CardBody, CardText
} from "reactstrap";
class Users extends Component {
    render() {
        if (!this.props.show) return null
        return (
            <Row>
                <Col sm="12">
                    <h2>First 20:</h2>
                    <Row>
                        {this.props.users.map((user, i) => {
                            return (
                                <Col sm="4">
                                    <Card>
                                        <CardImg top width="100%" src={user.profile_image} alt="Profile Image" />
                                        <CardBody>
                                            <CardText>Display Name: {user.display_name}</CardText>
                                            <CardText>Link to : <a href={user.link}>Link to Profile</a></CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Users;