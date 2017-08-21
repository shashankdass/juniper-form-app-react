import React from 'react';
import EndTime from './EndTime';
import renderer from 'react-test-renderer';

test('it renders EndTime Component', () => {
  const component = renderer.create(
    <EndTime></EndTime>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
