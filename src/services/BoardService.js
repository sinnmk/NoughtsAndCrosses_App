export const boardService = {
    get,
    create,
    edit,
    delete
} 

function get(){
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({boardId, boardDimension, boardState, isTerminal})
    };
    return fetch('localhost://3000/board')
    .then(board => {

    });
}