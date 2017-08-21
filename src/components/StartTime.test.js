import React from 'react';
import StartTime from './StartTime';
import renderer from 'react-test-renderer';

test('it renders StartTime Component', () => {
  const component = renderer.create(
    <StartTime></StartTime>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
