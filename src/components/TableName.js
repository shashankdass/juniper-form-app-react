import React, { Component } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

export class TableName extends Component{

  render() {
    return(
      <div>
      <FormGroup row>
        <Label sm={2}>
          Table Name:
          </Label>
          <Col sm={5}>
            <Input name="tableName" type="text" placeholder="Table name used for query" />
          </Col>
        </FormGroup >
      </div>
    )
  }
}

export default TableName;
