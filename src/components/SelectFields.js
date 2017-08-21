import React, { Component } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

class SelectFields extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  render() {
    return(
      <div>
      <FormGroup row>
         <Label for="SelectFields" sm={2}>Select Fields:</Label>
         <Col sm={5}>
           <Input type="select"  name="selectOption" id="selectOption">
             <option value="empty"></option>
             <option value="time">Time</option>
             <option value="source_vn">Source</option>
             <option value="destination_vn">Destination</option>
             <option value="port">Port</option>
           </Input>
          </Col>
       </FormGroup>
      </div>
    )
  }
}

export default SelectFields;
