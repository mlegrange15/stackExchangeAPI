
import React, { Component } from 'react';
import {
    Col, Card, CardImg, CardBody, CardText
} from "reactstrap";

class UserCards extends Component {
    render() {
        return (
            <Col sm="4">
                <Card className="shadow-lg mb-2">
                    <CardImg top width="100%" src={this.props.image} alt="Profile Image" />
                    <CardBody>
                        <CardText>Display Name: {this.props.name}</CardText>
                        <CardText>Link to : <a href={this.props.link} target="_blank" rel="noopener noreferrer">Link to Profile</a></CardText>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default UserCards;