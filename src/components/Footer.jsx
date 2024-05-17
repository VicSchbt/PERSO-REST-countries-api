import React from 'react';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className='bg-dark-blue mt-20 px-20 py-6 relative bottom-0'>
			<p className='text-white text-center'>Victoire Schubert &copy; {year}</p>
		</footer>
	);
};

export default Footer;
