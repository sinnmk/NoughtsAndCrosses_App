import React from 'react';
import renderer from 'react-test-renderer';
import Signup from './Signup'

describe('When Signup Component is rendered', () =>{

    test('Signup content is rendered', () =>{
        const component = renderer.create(
            <Signup/>).toJSON();

        expect(component).toMatchSnapshot();
    })
})