import React, {Component} from 'react';
import dotnetify from 'dotnetify';

dotnetify.hubServerUrl = "http://localhost:50000"

class Board extends Component {

    constructor(props){
        super(props);
        this.state = {
            size: [],
            boardState: []
        }
        this.connection = dotnetify.react.connect("board", this);
        this.dispatchState = state => this.connection.$dispatch(state);
    }
    
    componentWillUnmount(){
        this.connection.$destroy();
    }

    render(){
        return(
            <div className="Board-intro">
                <p>Board size is: {this.state.size}</p>
                <p>Board state is: {this.state.boardState}</p>
            </div>
        )
    }
}

export default Board;