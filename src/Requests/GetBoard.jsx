import $ from 'jquery';

class GetBoard{
    static execute(){
        return $.ajax({
            method: "GET", 
            url: 'http://localhost:9000/board' 
        });
    }
}
export default GetBoard;