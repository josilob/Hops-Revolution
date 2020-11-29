import React from 'react';
import './BeerDetails.css';

function BeerDetails({ data, clearDetails }) {
	return (
		<div className='beer-details'>
			<div className='beer-description'>
				{data.name}
				<br />
				Brewery : {data.breweries[0].name}
				<br />
				Style : {data.style.name}
				<br />
				ABV : {data.abv}
				<br />
				IBU : {data.ibu}
				<br />
				{data.description}
				<br />
				<br />
				<button className='details-btn' onClick={() => clearDetails()}>
					close
				</button>
			</div>
		</div>
	);
}

export default BeerDetails;
