
import React, { Component } from 'react';
import {
    Row, Col, Card, CardTitle
} from "reactstrap";
class Questions extends Component {
    render() {
        if (!this.props.showStats) return null
        return (
            <Row className="mb-3">
                <Col sm="3">
                    <Card body>
                        <CardTitle>Total Questions Asked:</CardTitle>

                    </Card>
                </Col>
                <Col sm="3">
                    <Card body>
                        <CardTitle>Users Asked Questions:</CardTitle>

                    </Card>
                </Col>
                <Col sm="3">
                    <Card body>
                        <CardTitle>Users Asked Multiple Questions:</CardTitle>

                    </Card>
                </Col>
                <Col sm="3">
                    <Card body>
                        <CardTitle>Questions Answered:</CardTitle>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Questions;