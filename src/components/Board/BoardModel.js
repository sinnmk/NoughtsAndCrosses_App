class BoardModel extends ReactAxiom.Model {
    static defaultState(){
        return {
            boardId: null, 
            boardDimension: null,
            boardIsTerminal: false,
            BoardState:'' 
        }
    }

    getBoardState(){
        var boardString = this.state.BoardState;
        var boardList = [];
        for(var i= 0; i < boardString; i++){
            boardList.append(i);
        }
        console.log(boardList);
        return boardList;
    }
}