import React from 'react';
import renderer from 'react-test-renderer';
import Home from './Home'

describe('When Home is rendered', () =>{
    test('Home content is rendered', () =>{
        const component = renderer.create(
            <Home/>).toJSON();

        expect(component).toMatchSnapshot();
    })
})