import React from 'react';
import {Button} from 'reactstrap';
import Home from '../Home/Home';
import {Link} from 'react-router-dom'

const GameTemplate = () =>{
    return (
        <div>
            <Link to="/" onClick={Home}><Button className = 'back-button'>Back to Main Menu</Button></Link>
        </div>
    )
}
export default GameTemplate;