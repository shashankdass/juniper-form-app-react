import React, {Component} from 'react';
import { Col, Label } from 'reactstrap';

class AndWidget extends Component {
constructor(props) {
  super(props);
  this.state = {
    value: ''
  };
}

render() {
  const divStyle = {
  padding: 10,
  };

  return (
    <div {...this.props} style={divStyle}>
        <Col>
        <Label style={divStyle}>
          Name:{' '}
          <input type="text" name={"whereName_"+this.props.uniKey}  />
        </Label>
        {'    '}
        <Label style={divStyle}>
          Value:{' '}
          <input type="text" name={"whereValue_"+this.props.uniKey}/>
        </Label>
        {'    '}
        <Label style={divStyle}>
          Operator:{' '}
          <select name={"whereOperator_"+this.props.uniKey} >
            <option value="empty"></option>
            <option value="=">=</option>
            <option value="!=">!=</option>
          </select>
        </Label>
        </Col>

    </div>
  )
}
}
export default AndWidget;
