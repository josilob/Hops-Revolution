import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Breweries from './components/Breweries';
import Location from './components/Location';
import Beer from './components/Beer';
import Form from './components/Form';
import About from './components/About';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';

function App() {
	const [selectedBrewery, setSelectedBrewery] = useState({});
	//console.log(selectedBrewery);
	const [center, setCenter] = React.useState({
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
					<Route path='/form'>
						<Form />
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
