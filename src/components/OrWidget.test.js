import React from 'react';
import OrWidget from './OrWidget';
import renderer from 'react-test-renderer';

test('it renders OrWidget Component', () => {
  const component = renderer.create(
    <OrWidget></OrWidget>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
