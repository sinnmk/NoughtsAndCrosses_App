import React from 'react';
import {configure, mount} from 'enzyme';
import LandingPage from "./LandingPage";
import NavigationTopBar from "../NavigationTopBar/Navigation"
import adapter from 'enzyme-adapter-react-16';

configure ({adapter: new adapter()});

describe("LandingPage", () => {
    it("can show the NavigationTopBar component", () => {
        const wrapper = mount(<LandingPage/>);
        expect(wrapper.find(<NavigationTopBar/>)).toEqual(true);
    });
});