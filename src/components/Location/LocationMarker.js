import React from 'react';
import { Icon } from '@iconify/react';
import mapMarkerSolid from '@iconify-icons/clarity/map-marker-solid';

function LocationMarker() {
	return (
		<div className='location-marker'>
			<Icon icon={mapMarkerSolid} className='location-icon' />
		</div>
	);
}

export default LocationMarker;
