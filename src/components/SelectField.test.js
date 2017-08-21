import React from 'react';
import SelectFields from './SelectFields';
import renderer from 'react-test-renderer';

test('it renders EndTime Component', () => {
  const component = renderer.create(
    <SelectFields></SelectFields>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
