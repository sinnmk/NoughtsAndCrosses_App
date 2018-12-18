import React from 'react';
import {mount, configure, shallow} from 'enzyme'; 
import Welcome from './Welcome';
import adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon'

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

    it("shows a 'play game' button welcome component", () => {
        const wrapper = mount(<Welcome/>);
        expect(wrapper.find("[data-id='play-game']").text()).toContain("Play Game");
    });

    it("shows game component upon clicking of play game button", () => {
        const wrapper = mount(<Welcome/>)
        const handleClick = sinon.spy(wrapper.instance(), 'handleClick');
        wrapper.find('[data-id="play-game"]').first().simulate('click');
        expect(handleClick.calledOnce).toBe(true);
    });
});