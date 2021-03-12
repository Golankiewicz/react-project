import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import './NewSection.css';

class NewSection extends Component {
	render() {
		return (
			<div className='sectionoverall'>
				<div className='section-left'>
					<div className='section-left-top'></div>
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
					<h1>Elektrycznie tematyczni</h1>
					<p>Szkolenia Akademia Szkoleń</p>
					<button className='sub'>Subskrybujesz</button>
					<ReactPlayer
						className='react-player'
						controls
						playIcon={<button>Play</button>}
						url='https://youtu.be/cZFhjMQrVts'
						url='https://www.youtube.com/watch?v=Z44PuRCjgMw'
						width='50%'
						height='35%'
					/>
				</div>
			</div>
		);
	}
}

export default NewSection;
