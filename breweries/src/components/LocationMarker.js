import React from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import beerMug from '@iconify-icons/emojione/beer-mug';

function LocationMarker() {
	return (
		<div className='location-marker'>
			<Icon icon={beerMug} className='location-icon' />
		</div>
	);
}

export default LocationMarker;
//onClick={onClick}
