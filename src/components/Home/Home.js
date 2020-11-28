import React from 'react';
import './Home.css';

function Home() {
	return (
		<div className='home'>
			<img src='hops-home.png' alt='home' className='home-hops' />
			<div className='welcome-container'>
				<h2 className='welcome'>Crafted to inspire</h2>
			</div>
		</div>
	);
}

export default Home;
