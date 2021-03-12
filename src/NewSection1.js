import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import './NewSection.css';

class NewSection1 extends Component {
	render() {
		return (
			<div className='sectionoverall'>
				<div className='section-left'>
					<div className='section-left-top1'></div>
					<div>
						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book. It has
							survived not only five centuries, but also the leap into
							electronic typesetting, remaining essentially unchanged. It was
							popularised in the 1960s with the release of Letraset sheets
							containing Lorem Ipsum passages, and more recently with desktop
							publishing software like Aldus PageMaker including versions of
							Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and
							typesetting industry. Lorem Ipsum has been the industry's standard
							dummy text ever since
						</p>
					</div>
				</div>
				<div className='section-right'>
					<h1>Nowości teatralne</h1>
					<p>Co nowego w teatrach</p>
					<button className='sub'>Subskrybujesz</button>
					<ReactPlayer
						className='react-player'
						controls
						playIcon={<button>Play</button>}
						url='https://www.youtube.com/watch?v=3N78vTXe_Dc'
						width='50%'
						height='35%'
					/>
				</div>
			</div>
		);
	}
}

export default NewSection1;
