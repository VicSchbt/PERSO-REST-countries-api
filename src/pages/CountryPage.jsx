import React from 'react';
import BackButton from '../components/BackButton';
import { useLoaderData } from 'react-router-dom';

const CountryPage = () => {
	const country = useLoaderData();
	console.log(country);
	return (
		<main>
			<BackButton />
			<article>
				<section>
					<img
						className='w-full rounded-t'
						src={country.flags.png}
						alt={`Flag of ${country.name}`}
					/>
				</section>
				<section>
					<h1>{country.name}</h1>
					<div>
						<p className='text-white font-light'>
							<span className='font-semibold'>Native Name:</span>{' '}
							{country.nativeName}
						</p>
						<p className='text-white font-light'>
							<span className='font-semibold'>Population:</span>{' '}
							{country.population.toLocaleString()}
						</p>
						<p className='text-white font-light'>
							<span className='font-semibold'>Region:</span> {country.region}
						</p>
						<p className='text-white font-light'>
							<span className='font-semibold'>Sub Region:</span>{' '}
							{country.subregion}
						</p>
						<p className='text-white font-light'>
							<span className='font-semibold'>Capital:</span> {country.capital}
						</p>
						<p className='text-white font-light'>
							<span className='font-semibold'>Top Level Domain:</span>{' '}
							{country.topLevelDomain}
						</p>
						<p className='text-white font-light'>
							<span className='font-semibold'>Currencies:</span>{' '}
							{country.currencies.map((currency, index) =>
								index === country.currencies.length - 1
									? currency.name
									: currency.name + ', '
							)}
						</p>
						<p className='text-white font-light'>
							<span className='font-semibold'>Languages:</span>{' '}
							{country.languages.map((language, index) =>
								index === country.languages.length - 1
									? language.name
									: language.name + ', '
							)}
						</p>
					</div>
				</section>
			</article>
		</main>
	);
};

const countryLoader = async ({ params }) => {
	try {
		const apiUrl = `/api/countries?alpha3Code=${params.id}`;
		const res = await fetch(apiUrl);
		const data = await res.json();
		if (data.length > 0) return data[0];
		throw new Error('Data is empty');
	} catch (error) {
		console.error(`Error fetching ${params.id}`, error);
	}
};

export { CountryPage as default, countryLoader };
