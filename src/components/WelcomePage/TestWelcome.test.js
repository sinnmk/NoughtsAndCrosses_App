import React from 'react';
import {mount, configure} from 'enzyme'; 
import Welcome from './Welcome';
import adapter from 'enzyme-adapter-react-16';
import {Button} from "@material-ui/core";
import sinon from "sinon";

configure ({adapter: new adapter()});

describe("Welcome Component", () => {
    it("shows a welcome message", () => {
        const wrapper = mount(<Welcome/>)
        expect(wrapper.find("[data-id='welcome-msg']").text()).toContain("Welcome, to Noughts+Crosses!")
    });

    it("shows a game description", () => {
        const wrapper = mount(<Welcome/>)
        expect(wrapper.find("[data-id='game-description']").text()).toContain("A simple site to play the popular game of Noughts + Crosses (Tic Tac Toe).")
    });

    it("shows a play game button", () => {
        const wrapper = mount(<Welcome/>)
        expect(wrapper.find("[data-id='body']").find("[data-id='welcome']").find("[data-action='play-button']").text()).toContain("Play Game")
    });

    it("shows game component upon clicking of play game button", () => {
        const wrapper = mount(<Welcome/>)
        const spy = jasmine.createSpy("handleButtonClick")
        wrapper.find("[data-id='body']").find("[data-id='welcome']").find("[data-action='play-button']").simulate('click')
        expect(spy).toHaveBeenCalled()
    });
});