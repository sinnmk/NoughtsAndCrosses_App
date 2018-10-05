import {Component} from 'react';
import GameRulesTemplate from './GameRulesTemplate';

export default class GameRules extends Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return GameRulesTemplate.call(this);
    }
    
    backToMenu(){

    }
}
