import React from 'react';

/* components */
import PageOne from './pages/_page-one';
import PageTwo from './pages/_page-two';

/* utils */
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
	return (
		<ul>
			<Link to="/">
				<li>PageOne</li>
			</Link>
			<Link to="/page-two">
				<li>PageTwo</li>
			</Link>
		</ul>
	);
}

export default function RouteApp() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" exact element={<PageOne />} />
				<Route path="/page-two" exact element={<PageTwo />} />
			</Routes>
		</BrowserRouter>
	);
}
