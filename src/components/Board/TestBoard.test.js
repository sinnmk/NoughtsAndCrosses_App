import React from 'react';
import {configure, mount} from 'enzyme';
import Board from "./Board";
import adapter from 'enzyme-adapter-react-16';

configure({adapter: new adapter()});

describe("Board", () => {
    xit("check for win", () => {

    });

    xit("can set marker in box that is clicked", () => {

    });

    xit("can reset game on click", () => {

    });

    xit("can make a put request with board data", () => {

    });

    xit("can convert board array to string", () => {

    });

    xit("initializes BoardState as a empty string array", () => {

    });

    xit("initializes Turn as the string x", () => {

    });
});