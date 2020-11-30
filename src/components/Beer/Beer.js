import React, { useState } from 'react';
import { BEER_KEY } from '../../variables';
import { BeerCard } from '../Styled-Components/BeerCard';
import Loader from '../Loader';
import './Beer.css';
import BeerDetails from '../BeerDetails/BeerDetails';

function Beer() {
	const [beers, setBeers] = useState([]);
	const [input, setInput] = useState('');
	const [showLoader, setShowLoader] = useState(false);
	const [beerDetails, setBeerDetails] = useState();

	const getBeers = async () => {
		try {
			setShowLoader(true);
			const CORS = 'http://cors-anywhere.herokuapp.com/';
			const beerURL = `${CORS}https://sandbox-api.brewerydb.com/v2/search?q=${input.toLowerCase()}&type=beer&withBreweries=Y&key=${BEER_KEY}`;

			const response = await fetch(CORS + beerURL);
			const data = await response.json();
			setBeers(data.data);
			//console.log(data.data);
			if (data.data.length > 0) setInput('');
		} catch (error) {
			console.log(error);
		} finally {
			setShowLoader(false);
		}
	};

	const readDetails = (e) => {
		setBeerDetails(e);
		console.log(beerDetails);
	};

	const clearDetails = () => {
		setBeerDetails(null);
	};

	const onFormSubmit = (e) => {
		e.preventDefault();
		getBeers();
	};

	const beerList = beers?.map((beer) => {
		return (
			<BeerCard
				className='beer-container'
				key={beer.id}
				onClick={() => readDetails(beer)}>
				<p className='beer-name'>{beer.name}</p>
			</BeerCard>
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
			<div className='beer-list'>
				{showLoader ? <Loader className='fetch-loader' /> : beerList}
			</div>
			{beerDetails && (
				<BeerDetails
					data={beerDetails}
					clearDetails={clearDetails}
					className='details-box'
				/>
			)}
		</div>
	);
}

export default Beer;
