import React from 'react';
import {configure, shallow} from 'enzyme';
import Game from "./Game";
import adapter from 'enzyme-adapter-react-16';

configure({adapter: new adapter()});

describe("Game", () => {
    it("can make a POST request to backend", () => {

    });

    it("can handle changing state's TurnChoice", () => {

    });

    it("can handle changing state's LevelChoice", () => {

    });

    it("can handle changing state's BoardDimension", () =>{

    });

    it("can show game component", () => {

    });

    it("can show board component when setup complete", () => {

    });
});