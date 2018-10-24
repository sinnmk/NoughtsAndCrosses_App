import React, {Component} from "react";

class Square extends Component{
    createSquare(){
        return (
            <button className="square">
            {this.props.value}
            </button>
        );
    }
}
export default Square;