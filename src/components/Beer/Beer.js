import React, { useState } from 'react';
import { BEER_KEY } from '../../variables';
import './Beer.css';

function Beer() {
	const [beers, setBeers] = useState([]);
	const [input, setInput] = useState('');

	const getBeers = async () => {
		try {
			const CORS = 'http://cors-anywhere.herokuapp.com/';
			const beerURL = `${CORS}https://sandbox-api.brewerydb.com/v2/search?q=${input.toLowerCase()}&type=beer&key=${BEER_KEY}`;

			const response = await fetch(CORS + beerURL);
			const data = await response.json();
			setBeers(data.data);
			console.log(data.data);
			if (data.data.length > 0) setInput('');
		} catch (error) {
			console.log(error);
		}
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		getBeers();
	};
	const beerList = beers.map((beer) => {
		return <div className='beer-card' key={beer.id}></div>;
	});

	return (
		<div className='beeer-container'>
			<div className='input-field'>
				<form onSubmit={onFormSubmit}>
					<input
						className='searchBar'
						type='text'
						value={input}
						placeholder='Beers by name'
						// aria-label='Search'
						onChange={(e) => setInput(e.target.value)}
					/>
					<button type='submit'>SUBMIT</button>
				</form>
			</div>
			{/* <div className='beer-list'>{beerListing}</div> */}
		</div>
	);
}

export default Beer;

//https://sandbox-api.brewerydb.com/v2/search?q=bud%20light&type=beer&key=c5b2321b631174d2a6ba826849e3950d

//https://sandbox-api.brewerydb.com/v2/breweries/?key=c5b2321b631174d2a6ba826849e3950d&withLocations=Y

//http://api.brewerydb.com/v2/endpoint/?key=c5b2321b631174d2a6ba826849e3950d

//WORKING PART BELOW
//http://api.brewerydb.com/v2/search?q=Bud%20Light&type=beer&key=c5b2321b631174d2a6ba826849e3950d

// http://api.brewerydb.com/v2/{endpoint}/?key=abcdef

// https://sandbox-api.brewerydb.com/v2/search?q=Anheuser&type=brewery&key=c5b2321b631174d2a6ba826849e3950d
