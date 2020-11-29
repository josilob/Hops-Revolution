import spinner from './loading.gif';

const Loader = () => {
	return (
		<div className='loader'>
			<img src={spinner} alt='Loading' />
			<h2 className='loading'>Fetching the data</h2>
		</div>
	);
};

export default Loader;
