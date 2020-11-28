import React, { useState } from 'react';
import { BEER_KEY } from '../../variables';
import { BeerCard } from '../Styled-Components/BeerCard';
import { Link } from 'react-router-dom';
import Loader from '../Loader';
import './Beer.css';

function Beer() {
	const [beers, setBeers] = useState([]);
	const [input, setInput] = useState('');
	const [showLoader, setShowLoader] = useState(false);

	const getBeers = async () => {
		try {
			setShowLoader(true);
			const CORS = 'http://cors-anywhere.herokuapp.com/';
			const beerURL = `${CORS}https://sandbox-api.brewerydb.com/v2/search?q=${input.toLowerCase()}&type=beer&key=${BEER_KEY}`;

			const response = await fetch(CORS + beerURL);
			const data = await response.json();
			setBeers(data.data);
			console.log(data.data);
			if (data.data.length > 0) setInput('');
		} catch (error) {
			console.log(error);
		} finally {
			setShowLoader(false);
		}
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		getBeers();
	};
	const beerList = beers?.map((beer) => {
		return (
			<div className='beer-container' key={beer.id}>
				<BeerCard className='beer-card'>
					<div className='container'>
						<div className='front'>
							<div className='inner'>
								<p className='beer-name'>{beer.name}</p>
							</div>
						</div>
					</div>
				</BeerCard>
			</div>
		);
	});

	return (
		<div className='beer-main'>
			<div className='input-field'>
				<form onSubmit={onFormSubmit}>
					<input
						className='searchBar'
						type='text'
						value={input}
						placeholder='Beers by name'
						onChange={(e) => setInput(e.target.value)}
					/>
					<button type='submit'>SUBMIT</button>
				</form>
			</div>
			<div className='beer-list'>{showLoader ? <Loader /> : beerList}</div>
		</div>
	);
}

export default Beer;

//https://sandbox-api.brewerydb.com/v2/search?q=bud%20light&type=beer&key=c5b2321b631174d2a6ba826849e3950d

//http://api.brewerydb.com/v2/endpoint/?key=c5b2321b631174d2a6ba826849e3950d

//WORKING PART BELOW
//http://api.brewerydb.com/v2/search?q=Bud%20Light&type=beer&key=c5b2321b631174d2a6ba826849e3950d

// http://api.brewerydb.com/v2/{endpoint}/?key=abcdef
