import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Breweries from './components/Breweries';
import Beer from './components/Beer';
import About from './components/About';
import Form from './components/Form';
import { Route, Switch } from 'react-router-dom';

function App() {
	const [selectedBrewery, setSelectedBrewery] = useState({});

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
				</Switch>
			</main>
			<Footer />
		</div>
	);
}

export default App;
