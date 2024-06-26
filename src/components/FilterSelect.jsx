import React, { useState } from 'react';

const FilterSelect = ({ region, onChangeFilter }) => {
	return (
		<form className='bg-dark-blue rounded px-6 py-4'>
			<select
				name='region'
				id='region'
				aria-label='Filter by Region'
				value={region}
				onChange={(e) => onChangeFilter(e.target.value)}
				className='bg-transparent text-white'
			>
				<option
					value=''
					disabled
				>
					Filter by Region
				</option>
				<option value='Africa'>Africa</option>
				<option value='Americas'>Americas</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Oceania'>Oceania</option>
			</select>
		</form>
	);
};

export default FilterSelect;
