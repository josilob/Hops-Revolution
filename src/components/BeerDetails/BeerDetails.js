import React from 'react';
import './BeerDetails.css';

function BeerDetails({ data, clearDetails }) {
	return (
		<div className='beer-details' onClick={() => clearDetails()}>
			<div className='beer-description'>
				{data.name}
				<br />
				{data.style.name}
				<br />
				{data.description}
			</div>
			<div>
				<img
					src={data.labels?.contentAwareLarge || 'beer-bottle.png'}
					className='beer-label'
				/>
			</div>
		</div>
	);
}

export default BeerDetails;
