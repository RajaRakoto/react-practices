import React, { Fragment } from 'react';
import './jungle.min.css';

function Header() {
	const description = (
		<p>Ici achetez toutes les plantes dont vous avez toujours rêvé 🌱</p>
	);
	const title = 'Jungle house';
	return (
		<div id="banner">
			<div id="official-logo"></div>
			<h1 id="title"> {title.toUpperCase()}</h1>
			<h3 id="description"> {description}</h3>
		</div>
	);
}

function Cart() {
	const unity = 'Ar';
	const monsteraPrice = 3000;
	const ivyPrice = 2300;
	const flowerPrice = 5000;

	function getSumPrice() {
		return monsteraPrice + ivyPrice + flowerPrice;
	}

	return (
		<div>
			<h4>Panier</h4>
			<ul>
				<li>Monstera: {monsteraPrice + unity}</li>
				<li>Lierre: {ivyPrice + unity}</li>
				<li>Fleurs: {flowerPrice + unity}</li>
			</ul>
			<h5>TOTAL: {getSumPrice()}</h5>
		</div>
	);
}

export default function JungleHome() {
	return (
		<Fragment>
			<Header />
			<Cart />
		</Fragment>
	);
}
