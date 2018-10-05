import {Component} from 'react';
import 'reactstrap'
import HeaderTemplate from './HeaderTemplate'

export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return HeaderTemplate.call(this);
    }
}