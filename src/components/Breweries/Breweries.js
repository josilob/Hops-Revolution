import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../Styled-Components/StyledComponents';

import { Link } from 'react-router-dom';
import { BREWERY_API } from '../../variables';

import './Breweries.css';

function Breweries(props) {
	const [breweries, setBreweries] = useState([]);
	const [input, setInput] = useState('');

	const getBreweries = async () => {
		const baseURL = BREWERY_API;
		const response = await fetch(baseURL + input.toLowerCase());
		const data = await response.json();
		console.log(data);
		setBreweries(() => data);
		if (data.length > 0) setInput('');
	};

	let breweryListing = breweries.map((brewery) => {
		return (
			<div className='card-container'>
				<Link
					to='/location'
					key={brewery.id}
					onClick={() => props.setSelectedBrewery(brewery)}>
					<Card className='brew-card'>
						<div className='container'>
							<div className='front'>
								<div className='inner'>
									<p>{brewery.name}</p>
									<span>{brewery.state}</span>
								</div>
							</div>
							<div className='back'>
								<div className='inner'>
									<p>
										{brewery.street}
										<br />
										{brewery.city}
										<br />
										{brewery.state}
										<br />
									</p>
								</div>
							</div>
						</div>
					</Card>
				</Link>
			</div>
		);
	});
	console.log(props.selectedBrewery);

	return (
		<div className='brewery-main'>
			<div className='input-field'>
				<input
					className='searchBar'
					type='text'
					value={input}
					placeholder='Search by City'
					aria-label='Search'
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					type='button'
					onClick={() => {
						getBreweries();
					}}>
					Search
				</button>
				<button type='button' onClick={() => console.log(breweries)}>
					Console
				</button>
			</div>
			<div className='brewery-list'>{breweryListing}</div>
		</div>
	);
}

export default Breweries;
