import React, { Component } from 'react';
import NewDiv from './NewDiv';
import NewDiv1 from './NewDiv1';
import NewSection from './NewSection';
import NewSection1 from './NewSection1';

import './App.css';

class App extends Component {
	state = {
		active: false,

		active1: false,
	};

	handleClick = () => {
		this.setState({
			active: !this.state.active,
		});
	};
	handleClick1 = () => {
		this.setState({
			active1: !this.state.active1,
		});
	};

	handleClickClose = () => {
		console.log('kliknięty');
		this.setState({
			active: false,
			active1: false,
		});
	};

	render() {
		if (this.state.active) {
			return (
				<>
					<button onClick={this.handleClickClose}>close</button>
					<NewDiv handleClick={this.handleClick} />
					<NewDiv1 handleClick1={this.handleClick1} />

					<NewSection />
				</>
			);
		}

		if (this.state.active1) {
			return (
				<>
					<button onClick={this.handleClickClose}>close</button>
					<NewDiv handleClick={this.handleClick} />

					<NewDiv1 handleClick1={this.handleClick1} />

					<NewSection1 />
				</>
			);
		}
		return (
			<>
				<button onClick={this.handleClickClose}>close</button>
				<NewDiv handleClick={this.handleClick} />

				<NewDiv1 handleClick1={this.handleClick1} />
			</>
		);
	}
}

export default App;
