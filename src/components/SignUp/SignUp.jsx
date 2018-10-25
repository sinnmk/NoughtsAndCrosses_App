import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Card, CardContent, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import Styles from './Styles';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {userId: null,
                emailAddress: "",
                password: "",
                firstName: "",
                lastName: ""}
            ]
        }
    }

    handleButtonClick(){
        return(console.log(this.state))
    }

    render() {
        return (
            <Card style={{flex:1}} align-items='flex-start'>
                <CardContent>
                    <Typography className="sign-up" color="textSecondary" gutterBottom>
                        Noughts+Crosses
                </Typography>
                    <Typography variant="h5" component="h2">
                        Welcome
                </Typography>
                    <Form>
                        <FormGroup row>
                            <Label for="user-email" sm={2}>Email</Label>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <Input type="user-email" name="user-email" id="user-email" placeholder="email@mailinator.com" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="user-password" sm={2}>Password</Label>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <Input type="user-password" name="user-password" id="user-password" placeholder="password" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="first-name" sm={2}>First Name</Label>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <Input type="first-name" name="first-name" id="first-name" placeholder="Jane" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="last-name" sm={2}>Last Name</Label>
                            <Col sm="12" md={{ size: 6, offset: 3 }}>
                                <Input type="last-name" name="last-name" id="last-name" placeholder="Smith" />
                            </Col>
                        </FormGroup>
                    </Form>
                </CardContent>
                <Button color="secondary" onClick={this.handleButtonClick()}>Register</Button>
            </Card>
        )
    }
}
SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(Styles)(SignUp);