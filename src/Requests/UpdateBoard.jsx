import $ from 'jquery';

class EditBoard{
    static execute(board){
        return $.ajax({
            method: "PUT",
            url: Endpoints.updateBoard(), 
            data: JSON.stringify(board),
        });
    }
}