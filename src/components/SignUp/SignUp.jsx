import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input} from 'reactstrap';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Form>
                <FormGroup row>
                    <Label for="user-email" sm={2}>Email</Label>
                    <Col sm="12" md={{size: 6, offset:3}}>
                        <Input type="user-email" name="user-email" id="user-email" placeholder="email@mailinator.com" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="user-password" sm={2}>Password</Label>
                    <Col sm="12" md={{size: 6, offset:3}}>
                        <Input type="user-password" name="user-password" id="user-password" placeholder="password" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="first-name" sm={2}>First Name</Label>
                    <Col sm="12" md={{size: 6, offset:3}}>
                        <Input type="first-name" name="first-name" id="first-name" placeholder="Jane" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="last-name" sm={2}>Last Name</Label>
                    <Col sm="12" md={{size: 6, offset:3}}>
                        <Input type="last-name" name="last-name" id="last-name" placeholder="Smith" />
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}