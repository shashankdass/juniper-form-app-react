import React from 'react';
import WhereClause from './WhereClause';
import renderer from 'react-test-renderer';

test('it renders WhereClause Component', () => {
  const component = renderer.create(
    <WhereClause></WhereClause>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
