import BackButton from '../components/BackButton';
import { Link, useLoaderData } from 'react-router-dom';

const CountryPage = () => {
	const country = useLoaderData();
	console.log(country);

	return (
		<>
			<div className='py-12'>
				<BackButton />
			</div>
			{country ? (
				<article className=' w-full grid grid-cols-2 gap-8'>
					<section>
						<img
							className='w-full rounded-t'
							src={country.flags.png}
							alt={`Flag of ${country.name}`}
						/>
					</section>
					<section className='flex flex-col gap-8'>
						<h1 className='text-2xl font-extrabold text-white'>
							{country.name}
						</h1>
						<div className='grid grid-cols-2 grid-rows-5 grid-flow-col'>
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
								<span className='font-semibold'>Capital:</span>{' '}
								{country.capital}
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
						{country.borders && (
							<ul className='flex flex-wrap'>
								{country.borders.map((border) => (
									<li
										key={border.alpha3Code}
										className='mx-2 my-4'
									>
										<Link
											to={`/${border.alpha3Code}`}
											className='bg-dark-blue text-white px-4 py-2  rounded'
										>
											{border.name}
										</Link>
									</li>
								))}
							</ul>
						)}
					</section>
				</article>
			) : (
				<h2>Error</h2>
			)}
		</>
	);
};

const countryLoader = async ({ params }) => {
	try {
		const apiUrl = `/api/countries?alpha3Code=${params.id}`;
		const res = await fetch(apiUrl);
		const data = await res.json();
		if (data.length > 0) {
			if (!data[0].borders) return data[0];
			const borders = [];
			await Promise.all(
				data[0].borders.map(async (border) => {
					const apiUrl = `/api/countries?alpha3Code=${border}`;
					const res = await fetch(apiUrl);
					const data = await res.json();
					if (data.length > 0) {
						borders.push({ name: data[0].name, alpha3Code: border });
					}
				})
			);
			const country = { ...data[0], borders };
			return country;
		}
		throw new Error('Data is empty');
	} catch (error) {
		console.error(`Error fetching ${params.id}`, error);
	}
};

export { CountryPage as default, countryLoader };
