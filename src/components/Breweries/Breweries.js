import React, { useState } from 'react';
import { Card } from '../Styled-Components/Card';
import { Link } from 'react-router-dom';
import { BREWERY_API } from '../../variables';

import './Breweries.css';

function Breweries(props) {
	const [breweries, setBreweries] = useState([]);
	const [input, setInput] = useState('');

	const getBreweries = async () => {
		try {
			const baseURL = BREWERY_API;
			const response = await fetch(baseURL + input.toLowerCase());
			const data = await response.json();
			console.log(data);
			setBreweries(() => data);
			//console.log(breweries);
			if (data.length > 0) setInput('');
		} catch (error) {
			//console.log(error);
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
					<Card className='brew-card'>
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
					</Card>
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
