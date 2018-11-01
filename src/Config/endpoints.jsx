import Config from './config.jsx';

class Endpoints{
    constructor(){
        this.config = Config.getConfig().msRoot;
        return this.config;
    }

    static getBoard(){
        return `${this.config}/Board`
    }

    static createBoard(){
        return `${this.config}/Board`
    }

    // static editBoard(){
    //     return `${this.config}/Board/update`
    // }

    // static deleteBoard(id){
    //     return  `${this.config}/Board/delete/${id}`
    // }
}
export default Endpoints;