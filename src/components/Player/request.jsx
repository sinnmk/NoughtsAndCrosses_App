import $ from "jquery";
import Endpoints from "noughts-and-crosses/Endpoints"

export default class PlayerRequests{
    constructor(){
        this.endpoints = new Endpoints();
    }

    execute(){
        return $.ajax({
            method: "GET",
            url: this.endpoints.Player()
        });
    }
}