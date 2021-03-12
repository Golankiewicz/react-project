import React, { Component } from 'react';
import './NewDiv.css';

class NewDiv extends Component {
	render(props) {
		return (
			<div className='newdiv' onClick={() => this.props.handleClick()}>
				Elektrycznie tematyczni
			</div>
		);
	}
}

export default NewDiv;

/*
function NewDiv(props) {
	return (
		<div className='newdiv' onClick={() => props.handleClick()}>
			Elektrycznie tematyczni
		</div>
	);
}
export default NewDiv;
*/
