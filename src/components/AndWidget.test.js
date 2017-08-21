import React from 'react';
import AndWidget from './AndWidget';
import renderer from 'react-test-renderer';

test('it renders AndWidget Component', () => {
  const component = renderer.create(
    <AndWidget></AndWidget>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
