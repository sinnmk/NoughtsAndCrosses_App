import React from 'react';
import {configure, mount} from 'enzyme';
import GameRules from "./GameRules";
import adapter from 'enzyme-adapter-react-16';

configure({adapter: new adapter()});

describe("GameRules Component", () => {
    it("shows the game rules", () => {
        const wrapper = mount(<GameRules/>)
        expect(wrapper.find("[data-id='game-rules]").text()).toContain("The rules for playing noughts and crosses are very simple. Each player takes it in turn to place their X or O into one of the empty squares in the grid by clicking on it. To win the game get three of your symbols in a line horizontally, vertically or diagonally. For the first game, X begins.")
    });
});