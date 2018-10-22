import React, {Component} from 'react';
import Konva, {Util} from 'konva';

export default class Board extends Component {

    constructor(props){
        super(props)
        this.state = {
            color: 'green'
        }
        this.handleClick = this.handleClick.bind(this);
        this.board = [["X", "O", ""],["X", "", ""], ["X", "O", "O"]];
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler({col, row, cellName, cellValue}){
    }

    handleClick(){
        this.setState({
            color: Konva.Util.getRandomColor()
        });
    }

    render(){
        return (
            <Rect
                x={10} y={10} width={50} height={50}
                fill={this.state.color}
                shadowBlur={10}
                onClick={this.handleClick}
            />
        );
        // return React.createElement(ReactBoard, {
        //     size: [3, 3],
        //     values: this.board,
        //     highlight: [[3, 3]],
        //     clickHandler: this.clickHandler
        // })
    }
}