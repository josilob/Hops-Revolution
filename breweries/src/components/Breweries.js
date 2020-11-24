import React, { useState } from 'react';
import './Breweries.css';

function Breweries(props) {
	const [breweries, setBreweries] = useState([]);
	const [input, setInput] = useState('');

	const getBreweries = async () => {
		const baseURL = `https://api.openbrewerydb.org/breweries?by_city=`;
		const response = await fetch(baseURL + input.toLowerCase());
		const data = await response.json();
		console.log(data);
		setBreweries(() => data);
	};

	let breweryListing = breweries.map((brewery) => {
		return (
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
		);
	});
	//console.log(props.selectedBrewery);
	return (
		<div className='search-bar-container'>
			<div className='input-group mb-0'>
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
						if (breweries.length > 0) setInput('');
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
