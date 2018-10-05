import {Component} from 'react';
import SignUpTemplate from './SignUpTemplate';

export default class SignIn extends Component{
    constructor(props){
        super(props);
        this.state= {}
    }

    render(){
        return SignUpTemplate.call(this);
    }
}