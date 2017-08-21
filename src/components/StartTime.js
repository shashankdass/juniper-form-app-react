import React, { Component } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

class StartTime extends Component{
  render() {
    return(
      <div>
        <FormGroup row>
          <Label sm={2}>
            Start Time:
            </Label>
            <Col sm={5}>
              <Input name="startTime" type="text" placeholder="Start Time in UNIX Epoch Format"/>
            </Col>
        </FormGroup>
      </div>
    )
  }
}

export default StartTime;
