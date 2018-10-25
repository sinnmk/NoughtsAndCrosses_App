import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import {Row, Col} from 'reactstrap';

class PlayerList extends Component{
    render(){
        let players = []

        return (
            <Aux>
                <Row>
                    <Link to='/createPlayer'>CreatePlayer</Link>
                </Row>
            </Aux>
        )
    }
}