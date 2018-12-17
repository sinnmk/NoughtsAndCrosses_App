import React from 'react';
import {shallow, mount, render} from 'enzyme';
import Welcome from './Welcome';

describe("Welcome Component", () => {
    it("shows a welcome message", () => {
        const wrapper = mount(<Welcome/>)
        expect(wrapper.find("[data-id='welcome-msg']"))
    });

    it("shows a game description", () => {
        const wrapper = mount(<Welcome/>)
        expect(wrapper.find("[data-id='game-description']"))
    });
});