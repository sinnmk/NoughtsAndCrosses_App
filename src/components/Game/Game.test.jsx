import React from 'react';
import renderer from 'react-test-renderer';
import Game from './Game';

describe('When Game is loaded', () =>{
    test('Game content is rendered', () =>{
        const component = renderer.create(
            <Game/>).toJSON();

        expect(component).toMatchSnapshot();
    })
})