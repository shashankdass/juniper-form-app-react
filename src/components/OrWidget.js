import React, {Component} from 'react';
import AndWidget from './AndWidget'
class OrWidget extends Component {
	render() {
		const headingStyle = {
			marginLeft: "25%"
		};
		return (
			<div>
        <h3 style={headingStyle}> Or </h3>
				<AndWidget key={this.props.key} uniKey={this.props.uniKey} />
			</div>
		)
	}
}

export default OrWidget;
