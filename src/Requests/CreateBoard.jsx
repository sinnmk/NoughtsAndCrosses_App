import $ from 'jquery';
import Board from 'models/board';

class EditBoard{
    static execute(){
    const board = new Board();
        return $.ajax({
            method: "POST",
            url: 'http://localhost:9000/board',
            data: JSON.stringify(board),
            contentType: "application/json"
        });
    }
}
export default EditBoard;