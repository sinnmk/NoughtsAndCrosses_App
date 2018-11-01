import React, {Backbone} from 'react.backbone';

class BoardModel extends Backbone.Model{
    boardId(){
        return this.get("BoardId");
    }

    setBoardId(){
        return this.setBoardId("BoardId", value);
    }

    boardDimension(){
        return this.get("BoardDimension");
    }

    setBoardDimension(){
        return this.set("BoardDimension", value);
    }

    isTerminal(){
        return this.get("IsTerminal");
    }

    setIsTerminal(){
        return this.set("IsTerminal", value);
    }
}
export default BoardModel;
