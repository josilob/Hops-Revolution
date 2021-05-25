import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BREWERY_API } from '../../variables';
import styled from 'styled-components';
import './Breweries.css';

function Breweries(props) {
	const [breweries, setBreweries] = useState([]);
	const [input, setInput] = useState('');

	const getBreweries = async () => {
		try {
			const baseURL = BREWERY_API;
			const response = await fetch(baseURL + input.toLowerCase());
			const data = await response.json();
			// console.log(data);
			setBreweries(() => data);
			if (data.length > 0) setInput('');
		} catch (error) {
			console.log(error);
		}
	};
	const onFormSubmit = (e) => {
		e.preventDefault();
		getBreweries();
	};

	const breweryListing = breweries.map((brewery) => {
		return (
			<div className='card-container' key={brewery.id}>
				<Link to='/location' onClick={() => props.setSelectedBrewery(brewery)}>
					<BreweryCard className='brew-card'>
						<div className='container'>
							<div className='front'>
								<div className='inner'>
									<p className='brw-name'>{brewery.name}</p>
									<span>
										{brewery.city}
										<br />
										{brewery.state}
									</span>
								</div>
							</div>
							<div className='back'>
								<div className='inner'>
									<p>
										{brewery.street}
										<br />
										<span className='coords'>
											lat: {parseFloat(brewery.latitude).toFixed(2)}
											<br />
											lng: {parseFloat(brewery.longitude).toFixed(2)}
											<br />
										</span>
									</p>
								</div>
							</div>
						</div>
					</BreweryCard>
				</Link>
			</div>
		);
	});

	return (
		<div className='brewery-main'>
			<div className='input-field'>
				<form onSubmit={onFormSubmit}>
					<input
						className='searchBar'
						type='text'
						value={input}
						placeholder='Search by City'
						// aria-label='Search'
						onChange={(e) => setInput(e.target.value)}
					/>
					<button type='submit'>SUBMIT</button>
				</form>
			</div>
			<div className='brewery-list'>{breweryListing}</div>
		</div>
	);
}

export default Breweries;

const BreweryCard = styled.div`
	.container {
		transform-style: preserve-3d;
		width: 200px;
		font-family: 'Piedra', cursive;
	}

	.front,
	.back {
		background-image: url('coaster2.png');
		background-size: 106%;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		background-position: center;
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1),
		backface-visibility: hidden;
		text-align: center;
		min-height: 200px;
		height: 200px;
		border-radius: 50%;
		color: #fff;
		font-size: 20px;
	}

	.back {
		background-image: url('globe.png');
	}

	.front:after {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
		height: 100%;
		content: '';
		display: block;
		opacity: 0.55;
		background-color: #000;
		backface-visibility: hidden;
		border-radius: 50%;
	}
	.container:hover .front,
	.container:hover .back {
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
		transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
	}

	.back {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
	}

	.inner {
		transform: translateY(-50%) translateZ(60px) scale(0.94);
		top: 50%;
		position: absolute;
		left: 0;
		width: 100%;
		padding: 2rem;
		box-sizing: border-box;
		outline: 1px solid transparent;
		perspective: inherit;
		z-index: 2;
	}

	.container .back {
		transform: rotateY(180deg);
		transform-style: preserve-3d;
	}

	.container .front {
		transform: rotateY(0deg);
		transform-style: preserve-3d;
	}

	.container:hover .back {
		transform: rotateY(0deg);
		transform-style: preserve-3d;
	}

	.container:hover .front {
		transform: rotateY(-180deg);
		transform-style: preserve-3d;
	}

	.front .inner p {
		font-size: 20px;
		margin-bottom: 1rem;
		position: relative;
		line-height: 1.6;
	}

	.front .inner p:after {
		content: '';
		width: 4rem;
		height: 2px;
		position: absolute;
		background: #c6d4df;
		display: block;
		left: 0;
		right: 0;
		margin: 0 auto;
		bottom: -0.75rem;
	}

	.front .inner span {
		color: rgba(255, 255, 255, 0.7);
		font-family: 'Courgette', cursive;
		font-weight: 300;
	}
	.coords {
		font-family: 'Courgette', cursive;

	}


	@media screen and (max-width: 768px) {

	}

	@media screen and (max-width: 450px) {

	}
`;
