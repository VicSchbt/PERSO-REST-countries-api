import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = () => {
	const navigate = useNavigate();
	return (
		<button
			onClick={() => navigate(-1)}
			className='bg-dark-blue text-white px-6 py-4 rounded flex gap-4 items-center'
		>
			<FaArrowLeft />
			Back
		</button>
	);
};

export default BackButton;
