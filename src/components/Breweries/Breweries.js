import React, { useState } from 'react';
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
			<Link to='/location'>
				<div
					className='brewCard'
					key={brewery.id}
					onClick={() => props.setSelectedBrewery(brewery)}>
					<h3>{brewery.name}</h3>
					<hr />
					<p>
						Located at: {brewery.street},{brewery.city}, {brewery.state}
					</p>
					<p>Website: {brewery.website_url}</p>
					<p>Brewery type: {brewery.brewery_type}</p>
					<br />
				</div>
			</Link>
		);
	});
	console.log(props.selectedBrewery);
	return (
		<div className='brewery-container'>
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
			<div>{breweryListing}</div>
		</div>
	);
}

export default Breweries;
