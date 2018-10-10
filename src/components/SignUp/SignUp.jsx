import {Component} from 'react';
import SignUpTemplate from './SignUpTemplate';

export default class SignIn extends Component{
    constructor(props){
        super(props);
        this.state= {}
    }

    componentDidMount(){
        fetch('https://localhost:64353')
        .then(results => {
            return results.json();
        }).then(data => {
            let signIn = data.results.map((form) => {
            })
        })
        this.setState({})
    }

    render(){
        return SignUpTemplate.call(this);
    }
}