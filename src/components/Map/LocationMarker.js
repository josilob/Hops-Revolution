import React from 'react';
import { Icon } from '@iconify/react';
import mapMarkerSolid from '@iconify-icons/clarity/map-marker-solid';

function LocationMarker({ onClick }) {
	return (
		<div className='location-marker'>
			<Icon icon={mapMarkerSolid} onClick={onClick} className='location-icon' />
		</div>
	);
}

export default LocationMarker;
