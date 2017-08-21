import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import EndTime from './components/EndTime'
import SelectFields from './components/SelectFields'
import StartTime from './components/StartTime'
import TableName from './components/TableName'
import WhereClause from './components/WhereClause'
import { Button, Form } from 'reactstrap';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/JSONPretty.monikai.styl';

class DBForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table_name: '',
      start_time:'',
      end_time:'',
      select_fields:'',
      where_clause:[]

  };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.combineClauses = this.combineClauses.bind(this);
  }

  handleChange(event) {
    switch (event.target.name) {
      case "tableName":
          this.setState({table_name: event.target.value});
          break;
      case "startTime":
          this.setState({start_time: event.target.value});
          break;
      case "endTime":
          this.setState({end_time: event.target.value});
          break;
      case "selectOption":
          var options = event.target.options;
          var value = [];
          for (var i = 0, l = options.length; i < l; i++) {
            if (options[i].selected) {
              value.push(options[i].value);
            }
          }
          this.setState({select_fields: value});
          break;
      default:
        break;
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    ReactDOM.render(
      <JSONPretty id="json-pretty" style={{fontSize: "1.5em"}} json={this.state}></JSONPretty>,
      document.getElementById('result')
    );
  }

  combineClauses(clauseDict){
    let comboExp = [[]]
    for (var i=0; i<Object.keys(clauseDict).length; i++){
      let curExp = clauseDict[i]
      switch (curExp['operation']) {
        case "or":
          let tempObjOr = {}
          let newObj = []
          tempObjOr["Name"] = curExp["whereName"]
          tempObjOr["Value"] = curExp["whereValue"]
          tempObjOr["Operator"] = curExp["whereOperator"]
          newObj.push(tempObjOr)
          comboExp.push(newObj)
          break;
        case "and":
          let lastVal = comboExp.pop()
          let tempObjAnd = {}
          tempObjAnd["Name"] = curExp["whereName"]
          tempObjAnd["Value"] = curExp["whereValue"]
          tempObjAnd["Operator"] = curExp["whereOperator"]
          lastVal.push(tempObjAnd)
          comboExp.push(lastVal)
          break;
        default:

      }
    }
    this.setState({
      where_clause:comboExp
    })
  }

  render() {
    return (
      <div className="App"  onChange={this.handleChange}>
      <div className="App-header">
          <h3>React DB Form </h3>
      </div>
      <br/>
      <Form onSubmit={this.handleSubmit}>
        <TableName />
        <StartTime />
        <EndTime />
        <SelectFields />
        <WhereClause combineClauses={this.combineClauses}/>
        <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
export default DBForm;
