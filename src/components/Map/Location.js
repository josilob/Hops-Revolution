import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import { GGL_KEY } from '../../variables';
import './Location.css';

function Location({ selectedBrewery, zoom, defCenter }) {
	const [locationInfo, setLocationInfo] = useState(null);
	const [coordinates, setCoordinates] = useState({
		lat: parseFloat(selectedBrewery.latitude),
		lng: parseFloat(selectedBrewery.longitude),
	});
	const examineCoords = selectedBrewery.longitude;
	const readInfo = () => {
		setLocationInfo(selectedBrewery);
	};
	const clearInfo = () => {
		setLocationInfo(null);
	};
	return (
		<div className='map'>
			<GoogleMapReact
				bootstrapURLKeys={{ key: GGL_KEY }}
				yesIWantToUseGoogleMapApiInternals
				defaultCenter={examineCoords ? coordinates : defCenter}
				defaultZoom={zoom}
				options={{
					styles: [
						{
							featureType: 'all',
							elementType: 'labels',
							stylers: [
								{
									visibility: '#on',
								},
							],
						},
					],
				}}>
				<LocationMarker
					lat={selectedBrewery.latitude || null}
					lng={selectedBrewery.longitude || null}
					onClick={readInfo}
				/>
			</GoogleMapReact>
			{locationInfo && (
				<div className='infobox'>
					{<p>{selectedBrewery.name}</p>}
					{<p>Brewery type: {selectedBrewery.brewery_type}</p>}
					{<p>Phone: {selectedBrewery.phone}</p>}
					{<p>ZIP: {selectedBrewery.postal_code}</p>}
					{<p>Street: {selectedBrewery.street}</p>}
					<a
						href={selectedBrewery.website_url}
						target='_blank'
						rel='noreferrer'
						className='brewery-web'>
						{selectedBrewery.website_url}
					</a>
					<br />
					<br />
					<button onClick={clearInfo}>Close</button>
				</div>
			)}
		</div>
	);
}

Location.defaultProps = {
	defCenter: {
		lat: 40.75,
		lng: -73.98,
	},
	zoom: 14,
};

export default Location;
