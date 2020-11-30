import './App.css';
import React, { useState } from 'react';
import Home from './Home/Home';
import Nav from './Nav/Nav';
import Breweries from './Breweries/Breweries';
import Location from './Map/Location';
import Beer from './Beer/Beer';
import About from './About/About';
import Footer from './Footer/Footer';
import { Route, Switch } from 'react-router-dom';

function App() {
	const [selectedBrewery, setSelectedBrewery] = useState({});
	const [center, setCenter] = useState({
		lat: selectedBrewery.latitude,
		lng: selectedBrewery.longitude,
	});

	return (
		<div className='App'>
			<Nav />
			<main className='centerContainer'>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route
						path='/breweries'
						render={(routerProps) => (
							<Breweries
								{...routerProps}
								setSelectedBrewery={setSelectedBrewery}
								selectedBrewery={selectedBrewery}
							/>
						)}
					/>
					<Route path='/beer'>
						<Beer />
					</Route>
					<Route path='/about'>
						<About />
					</Route>
					<Route path='/location'>
						<Location selectedBrewery={selectedBrewery} center={center} />
					</Route>
				</Switch>
			</main>
			<Footer />
		</div>
	);
}

export default App;
