import React from 'react';
import {configure, shallow} from 'enzyme';
import Game from "./Game";
import adapter from 'enzyme-adapter-react-16';

configure({adapter: new adapter()});

describe("Game", () => {
    xit("can make a POST request to backend", () => {

    });

    xit("can handle changing state's TurnChoice", () => {

    });

    xit("can handle changing state's LevelChoice", () => {

    });

    xit("can handle changing state's BoardDimension", () =>{

    });
});