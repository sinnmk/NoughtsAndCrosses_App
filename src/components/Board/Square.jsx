import React, { Component } from 'react';

class Square extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        const boxStyle = {
            width: "30%",
            height: "100px",
            background: "black",
            float: "left",
            margin: "5px",
            color: "pink",
            verticalAlign: "middle",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        };
        return (
            <div style={boxStyle} onClick={this.props.onClick}>
                {this.props.name}
            </div>
        );
    }
}
export default Square;