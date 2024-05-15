import React from 'react';
import { FaMoon } from 'react-icons/fa';

const Header = () => {
	return (
		<header className='bg-dark-blue px-8 py-4 flex justify-between items-center'>
			<h1 className='text-white text-3xl font-extrabold'>
				Where in the world?
			</h1>
			<button
				type='button'
				className='text-white flex gap-2 items-center'
			>
				<FaMoon />
				Dark Mode
			</button>
		</header>
	);
};

export default Header;
