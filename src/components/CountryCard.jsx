import React from 'react';

const CountryCard = ({ country }) => {
	return (
		<div className='bg-dark-blue rounded flex flex-col justify-between'>
			<img
				className='w-full rounded-t'
				src={country.flags.png}
				alt={`Flag of ${country.name}`}
			/>
			<div className='p-6 pb-8'>
				<h2 className='text-lg font-extrabold text-white py-2'>
					{country.name}
				</h2>
				<p className='text-white font-light'>
					<span className='font-semibold'>Population:</span>{' '}
					{country.population.toLocaleString()}
				</p>
				<p className='text-white font-light'>
					<span className='font-semibold'>Region:</span> {country.region}
				</p>
				<p className='text-white font-light'>
					<span className='font-semibold'>Capital:</span> {country.capital}
				</p>
			</div>
		</div>
	);
};

export default CountryCard;
