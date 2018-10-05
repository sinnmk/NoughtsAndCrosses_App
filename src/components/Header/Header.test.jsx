import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header'

describe('When Header is rendered',() =>{

    test('Header displays Header content', () =>{
        const component = renderer.create(
            <Header/>).toJSON();

        expect(component).toMatchSnapshot();
    })

})