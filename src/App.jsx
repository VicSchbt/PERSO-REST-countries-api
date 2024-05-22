import React from 'react';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import CountryPage, { countryLoader } from './pages/CountryPage';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path='/'
				element={<MainLayout />}
			>
				<Route
					index
					element={<HomePage />}
				/>

				<Route
					path='/:id'
					element={<CountryPage />}
					loader={countryLoader}
				/>
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
