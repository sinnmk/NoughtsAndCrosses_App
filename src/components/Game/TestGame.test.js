import React from 'react';
import {configure, mount} from 'enzyme';
import Game from "./Game";
import adapter from 'enzyme-adapter-react-16';

configure({adapter: new adapter()});

describe("Game", () => {
    it("can render the Game component", () => {

    });
});