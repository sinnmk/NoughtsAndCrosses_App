import React from 'react';
import {configure, shallow, mount, render} from 'enzyme';
import GameRules from "./GameRules";
import adapter from 'enzyme-adapter-react-16';

configure({adapter: new adapter()});

describe("GameRules Component", () => {
    it("shows the game rules", () => {
        const wrapper = mount(<GameRules/>)
        expect(wrapper.find("[data-id='game-rules]"))
    });
});