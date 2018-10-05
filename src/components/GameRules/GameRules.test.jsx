import React from 'react';
import renderer from 'react-test-renderer';
import GameRules from './GameRules';

describe('When GameRules is Clicked', () =>{
    test('Game rules content is rendered', () =>{
        const component = renderer.create(
            <GameRules/>).toJSON();

        expect(component).toMatchSnapshot();
    })
})