import React, { Component } from 'react';
import './NewDiv.css';

class NewDiv1 extends Component {
	render(props) {
		return (
			<div className='newdiv1' onClick={() => this.props.handleClick1()}>
				Nowości teatralne
			</div>
		);
	}
}

export default NewDiv1;

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
