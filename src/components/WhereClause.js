import React, {Component} from 'react';
import AndWidget from './AndWidget'
import OrWidget from './OrWidget'
import { FormGroup, Label } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class WhereClause extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			value: '',
      clauses:[],
			andOrClauses:[],
			dropdownOpen: false,
			clauseDict:{}
		};

		this.handleChange = this.handleChange.bind(this);
    this.handleAddOr = this.handleAddOr.bind(this)
    this.handleRemoveOr = this.handleRemoveOr.bind(this)
		this.handleAddAnd = this.handleAddAnd.bind(this)
    this.handleRemoveAnd = this.handleRemoveAnd.bind(this)
		this.createAndOrWidgets = this.createAndOrWidgets.bind(this)
	}
	toggle() {
	    this.setState({
	      dropdownOpen: !this.state.dropdownOpen
	    });
	  }

	handleChange(event) {
		let curKey = event.target.name
		let curKeyValues = curKey.split('_')
		let curDict = this.state.clauseDict
		curDict[curKeyValues[1]][curKeyValues[0]] = event.target.value
		this.setState({clauseDict: curDict});
		this.props.combineClauses(this.state.clauseDict)
	}

  handleAddOr() {
		let curClauses = this.state.clauses
		curClauses.push("or")
    this.setState({
      clauses: curClauses
    }, this.createAndOrWidgets)
  }
  handleRemoveOr() {
		let curClauses = this.state.clauses
		for (var i=this.state.clauses.length-1; i>=0;i--){
			if (this.state.clauses[i] === "or") {
				curClauses.pop()
				break;
			} else {
				curClauses.pop()

			}
		}
    this.setState({
      clauses: curClauses
    },this.createAndOrWidgets)
  }

	handleAddAnd() {
		let curClauses = this.state.clauses
		curClauses.push("and")
    this.setState({
			clauses: curClauses
    },this.createAndOrWidgets)
  }
  handleRemoveAnd() {
		this.state.clauses.pop()
    this.setState({
      clauses: this.state.clauses
    },this.createAndOrWidgets)
  }

	createAndOrWidgets(){
		let clauses = [];
    for (var i = 0; i < this.state.clauses.length; i++) {
			if (this.state.clauses[i] === "or"){
				clauses.push(< OrWidget key={i} uniKey={i} />)
				let whereName = ''
				let whereValue = ''
				let whereOperator = ''
				if (i in this.state.clauseDict){
					whereName = this.state.clauseDict[i]['whereName']
					whereValue = this.state.clauseDict[i]['whereValue']
					whereOperator = this.state.clauseDict[i]['whereOperator']
				}
				const curClauseDict = this.state.clauseDict
				curClauseDict[i] = {
					'operation': "or",
					"whereName": whereName,
					 "whereValue": whereValue,
					 "whereOperator": whereOperator
				}
				this.setState({
					clauseDict:curClauseDict
				})
			} else {
				clauses.push(< AndWidget key={i} uniKey={i}/>)
				let whereName = ''
				let whereValue = ''
				let whereOperator = ''
				if (i in this.state.clauseDict){
					whereName = this.state.clauseDict[i]['whereName']
					whereValue = this.state.clauseDict[i]['whereValue']
					whereOperator = this.state.clauseDict[i]['whereOperator']
				}
				const curClauseDict = this.state.clauseDict
				curClauseDict[i] = {
					'operation': "and",
					"whereName": whereName,
					 "whereValue": whereValue,
					 "whereOperator": whereOperator
				}
				this.setState({
					clauseDict:curClauseDict
				})
			}
		}
		this.setState({
			andOrClauses:clauses
		})
	}
	render() {
		return (
			<div onChange={this.handleChange}>
	      <FormGroup>
					<Label>
						Where Clause:
					</Label>
					<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
		        <DropdownToggle caret>
		          Add AND or OR  clauses
		        </DropdownToggle>
		        <DropdownMenu>
		          <DropdownItem onClick={this.handleAddAnd}>Add And Clause</DropdownItem>
							<DropdownItem onClick={this.handleRemoveAnd}>Remove And Clause</DropdownItem>
							<DropdownItem divider />
							<DropdownItem onClick={this.handleAddOr}>Add Or Clause</DropdownItem>
							<DropdownItem onClick={this.handleRemoveOr}>Remove Or Clause</DropdownItem>
		        </DropdownMenu>
		      </Dropdown>
					<br/>
					{this.state.andOrClauses}
	      </FormGroup>
			</div>
		)
	}
}

export default WhereClause;
