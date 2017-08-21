import React from 'react';
import {TableName} from './TableName';
import renderer from 'react-test-renderer';

test('it renders TableName Component', () => {
  const component = renderer.create(
    <TableName></TableName>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
