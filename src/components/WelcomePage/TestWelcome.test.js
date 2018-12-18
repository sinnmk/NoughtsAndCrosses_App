import React from 'react';
import {mount, configure} from 'enzyme'; 
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

    xit("shows a 'play game' button welcome component", () => {
        const wrapper = mount(<Welcome/>);
        expect(wrapper.find("[data-id='play-game']").text()).toContain("Play Game");
    });

    xit("shows game component upon clicking of play game button", () => {
        const clickCallBack = sinon.spy();
        const wrapper = mount(<Welcome />);
        wrapper.find('[data-id="play-game"]').simulate('click');
        sinon.assert.called(clickCallBack);
    });
});