import {Form, Col, Container, FormGroup, FormText, Label, Button, Input} from 'reactstrap'
import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../Home/Home';

const SignUpTemplate = ()=>{
    return(
        <div> 
            <Link to="/" onClick={Home}><Button className = 'back-button'>Back to Main Menu</Button></Link>
            <Container className="App">
                <h2>Register For Free</h2>
                <Form className="form">
                    <Col>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input
                                type="email"
                                name="email"
                                id= "id"
                                placeholder="myemail@email.com"
                                />
                                <br/>
                                <FormText>Your username can be your email.</FormText>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for='examplePassword'>Password</Label>
                            <Input  
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="*******"
                                />
                        </FormGroup>
                    <Col>
                        <FormGroup>
                            <Label for='examplePassword'>Re-type Password</Label>
                            <Input  
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="*******"
                                />
                        </FormGroup>
                    </Col>
                    </Col>
                    <Button>Submit</Button>
                </Form>
            </Container>
        </div>
    )
}
export default SignUpTemplate;