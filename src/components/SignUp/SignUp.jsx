import React, { Component } from 'react';
import { Col, Form, FormGroup, Label, Input} from 'reactstrap';
import { Card, CardContent, Typography, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types'

const styles = {
  card: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 4px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    marginRight: 55,
    marginLeft: 55
  },
};

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(props) {
        return (
            <Card className='sign-up'>
                <CardContent>
                    <Typography className="sign-up" color="textSecondary" gutterBottom>
                    Noughts+Crosses
                    </Typography>
                    <Typography variant="h5" component="h2">
                    Sign Up
                    </Typography>
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
                </CardContent>
            </Card>
        )
    }
}
SignUp.propTypes ={
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);