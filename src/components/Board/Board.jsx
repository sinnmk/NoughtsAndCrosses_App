import React, {Component} from 'react';
import $ from 'jquery';

class Board extends Component {

    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            BoardState: [],
            IsTerminal: false
        }
    }

    // renderBoardRows(BoardDimension){
    //     var board = $("#boardRows")
    //     var boardRow = '';
    //     for(var i = 0; i < BoardDimension; i++){
    //         result += [
    //                 <tr>
    //                     <td width="100">
    //                         <button width="100">
    //                         </button>
    //                     </td>
    //                     <td width="100">
    //                         <button>
    //                         </button>
    //                     </td>
    //                     <td width="100">
    //                         <button>
    //                         </button>
    //                     </td>
    //                 </tr>
    //         ].join("\n");
    //     }
    //     board.html(boardRow);
    //     return false;
    // }

    render(){
        return (
            <table>
                <tbody>
                    <tr>
                        <td width="100">
                            <button width="100">
                            </button>
                        </td>
                        <td width="100">
                            <button>
                            </button>
                        </td>
                        <td width="100">
                            <button>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td width="100">
                            <button>
                            </button>
                        </td>
                        <td width="100">
                            <button>
                            </button>
                        </td>
                        <td width="100">
                            <button>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td width="100">
                            <button>
                            </button>
                        </td>
                        <td width="100">
                            <button>
                            </button>
                        </td>
                        <td width="100">
                            <button>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }

    createBoard(){
        return $.ajax({
            method: "POST", 
            url: 'http://localhost:9000/board',
            data: JSON.stringify(this.state),
            contentType: "application/json"
        }).done(function(data){
            console.log('success', data)
        }).fail(function(xhr){
            console.log('error', xhr)
        });
    }
}
export default Board;