import { Component } from 'react';
import 'reactstrap'
import HomeTemplate from './HomeTemplate';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return HomeTemplate.call(this);
    }
}