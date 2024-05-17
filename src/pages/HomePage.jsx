import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import FilterSelect from '../components/FilterSelect';
import CountryCard from '../components/CountryCard';

const HomePage = () => {
	const [countries, setCountries] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCountries = async () => {
			const apiUrl = '/api/countries?_limit=8';
			try {
				const res = await fetch(apiUrl);
				const data = await res.json();
				setCountries(data);
			} catch (error) {
				console.error('Error fetching countries', error);
			} finally {
				setLoading(false);
			}
		};

		fetchCountries();
	}, []);

	return (
		<main className='px-20'>
			<section className='py-12 flex justify-between'>
				<SearchBar />
				<FilterSelect />
			</section>
			{loading ? (
				<p className='text-white'>loading</p>
			) : (
				<section className='grid grid-cols-4 gap-20'>
					{countries.map((country) => (
						<CountryCard
							key={country.name}
							country={country}
						/>
					))}
				</section>
			)}
		</main>
	);
};

export default HomePage;
