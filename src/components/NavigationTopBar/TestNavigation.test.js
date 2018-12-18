import React from 'react';
import {configure, mount} from 'enzyme';
import Navigation from "./Navigation";
import adapter from 'enzyme-adapter-react-16';

configure({adapter: new adapter()});

describe("Navigation Component", () => {

    it("displays a play icon", () => {
        const wrapper = mount(<Navigation/>)

    });

    it("displays a help icon", () =>{
        const wrapper = mount(<Navigation/>)

    }); 

    it("renders welcome page when first tab clicked", () => {
        const wrapper = mount(<Navigation/>)

    });

    it("renders rules component when 2nd tab is clicked", () => {
        const wrapper = mount(<Navigation/>)

    });
});