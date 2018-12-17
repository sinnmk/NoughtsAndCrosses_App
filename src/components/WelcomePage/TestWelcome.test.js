import React from 'react';
import {mount, configure} from 'enzyme'; 
import Welcome from './Welcome';
import adapter from 'enzyme-adapter-react-16';

configure ({adapter: new adapter()});

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