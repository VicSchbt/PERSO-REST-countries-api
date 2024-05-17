import React, { useState } from 'react';

const FilterSelect = () => {
	const [region, setRegion] = useState('');

	return (
		<form className='bg-dark-blue rounded px-6 py-4'>
			<select
				name='region'
				id='region'
				aria-label='Filter by Region'
				value={region}
				onChange={(e) => setRegion(e.target.value)}
				className='bg-transparent text-white'
			>
				<option
					value=''
					disabled
				>
					Filter by Region
				</option>
				<option value='Africa'>Africa</option>
				<option value='America'>America</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Oceania'>Oceania</option>
			</select>
		</form>
	);
};

export default FilterSelect;
