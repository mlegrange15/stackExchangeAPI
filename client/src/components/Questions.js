
import React, { Component } from 'react';
import {
    Row, Col, Card, CardTitle, Button
} from "reactstrap";
class Questions extends Component {
    render() {
        if (!this.props.showUsers) return null
        return (
            <Row className="mb-3">
                <Col sm="12">
                    <Card body>
                        <CardTitle>Get more information on:</CardTitle>
                        <Row>
                            <Col sm="4">
                                <Button onClick={e => this.props.handleGetQuestionsClick(e, this.props.users)} color="info"><p>Questions they've asked</p></Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Questions;
