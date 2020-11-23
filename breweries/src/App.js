import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Footer />
		</div>
	);
}

export default App;
