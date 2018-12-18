import React from 'react';
import {mount, configure} from 'enzyme'; 
import Welcome from './Welcome';
import Game from '../Game/Game';
import adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

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

    xit("shows game component upon clicking of play game button", () => {
        const wrapper = mount(<Welcome />);
        const spy = sinon.spy()
        spy(<Game/>)
        wrapper.find('[data-action="play-game"]').simulate('click');
        expect(wrapper.find(<Game/>))
    });
});