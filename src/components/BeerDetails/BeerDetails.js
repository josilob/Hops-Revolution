import React from 'react';
import './BeerDetails.css';

function BeerDetails({ data, clearDetails }) {
	return (
		<div className='beer-details'>
			<div className='beer-description'>
				<p className='beer-api-data'>{data.name}</p>
				<p className='beer-api-data'>Brewery : {data.breweries[0].name}</p>

				<p className='beer-api-data'>
					Place :{data.breweries[0].locations[0].locality}
				</p>
				<p className='beer-api-data'>Style : {data.style?.name}</p>
				<p className='beer-api-data'>ABV : {data.abv}</p>
				<p className='beer-api-data'>IBU : {data.ibu}</p>
				<p className='beer-api-data'>{data.description}</p>
				<br />
				<button className='details-btn' onClick={() => clearDetails()}>
					close
				</button>
			</div>
		</div>
	);
}

export default BeerDetails;
