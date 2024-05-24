import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = () => {
	return (
		<Link
			to={'/'}
			className='w-max bg-dark-blue text-white px-6 py-4 rounded flex gap-4 items-center cursor-pointer'
		>
			<FaArrowLeft />
			Back
		</Link>
	);
};

export default BackButton;
