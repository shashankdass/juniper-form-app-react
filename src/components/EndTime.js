import React, { Component } from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

class EndTime extends Component{

  render() {
    return(
      <div>
        <FormGroup row>
          <Label sm={2}>
            End Time:
            </Label>
            <Col sm={5}>
              <Input name="endTime" type="text" placeholder="End Time in UNIX Epoch Format"/>
            </Col>
        </FormGroup>
      </div>
    )
  }
}

export default EndTime;
