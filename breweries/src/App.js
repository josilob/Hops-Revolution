import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Breweries from './components/Breweries';
import Beer from './components/Beer';
import About from './components/About';
import Form from './components/Form';

import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/breweries'>
					<Breweries />
				</Route>
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
			<Footer />
		</div>
	);
}

export default App;
