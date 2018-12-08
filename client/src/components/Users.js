
import React, { Component } from 'react';
import {
    Row, Col
} from "reactstrap";
import UsersCards from './UserCards'

class Users extends Component {
    render() {
        if (!this.props.showUsers) return null
        return (
            <Row>
                <Col sm="12">
                    <h2>First 20:</h2>
                    <Row>
                        {this.props.users.map((user, i) => {
                            return (
                                <UsersCards
                                    key={i}
                                    image={user.profile_image}
                                    name={user.display_name}
                                    link={user.link}
                                />
                            );
                        })}
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default Users;