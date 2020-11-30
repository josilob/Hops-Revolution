import React from 'react';
import './Home.css';

function Home() {
	return (
		<div className='home'>
			<img src='hops-home.png' alt='home' className='home-hops' />
			<div className='welcome-container'>
				<h2 className='welcome'>{'(H)opposites attract!'}</h2>
				<h2 className='welcome'>{'Looking for a beer?'}</h2>
				<h2 className='welcome'>{"Let's help you find one!"}</h2>
			</div>
		</div>
	);
}

export default Home;
