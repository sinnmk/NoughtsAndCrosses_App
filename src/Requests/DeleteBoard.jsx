import $ from 'jquery';
import Endpoints from '../Enpoints/Board'

class DeleteBoard{
    static execute(id){
        return $.ajax({
            method: "DELETE",
            url: Endpoints.editBoard(id)
        });
    }
}
export default DeleteBoard;