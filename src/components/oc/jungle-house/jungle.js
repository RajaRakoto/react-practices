import React, { Fragment } from 'react';
import './jungle.min.css';
// import { plantList } from '../../../data/plantList';

// TODO: verified
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

// TODO: verified
function Cart() {
	const unity = 'Ar';
	const monsteraPrice = 3000;
	const ivyPrice = 2300;
	const flowerPrice = 5000;

	function getSumPrice() {
		return monsteraPrice + ivyPrice + flowerPrice;
	}

	return (
		<div id="cart">
			<h4>🛒 Panier</h4>
			<ul>
				<li>Monstera: {monsteraPrice + unity}</li>
				<li>Lierre: {ivyPrice + unity}</li>
				<li>Fleurs: {flowerPrice + unity}</li>
			</ul>
			<h5>
				<span>TOTAL:</span> {getSumPrice()}
			</h5>
		</div>
	);
}

// // TODO: work - mapping
// function Shopping() {
// 	const categories = plantList.reduce(
// 		(acc, plant) =>
// 			acc.includes(plant.category) ? acc : acc.concat(plant.category),
// 		[],
// 	);

// 	return (
// 		<div>
// 			<ul>
// 				{categories.map(cat => (
// 					<li key={cat}>{cat}</li>
// 				))}
// 			</ul>
// 			<ul>
// 				{plantList.map(plant => (
// 					<li key={plant.id}>{plant.name}</li>
// 				))}
// 			</ul>
// 		</div>
// 	);
// }

// TODO: work - render
export default function Jungle() {
	return (
		<Fragment>
			<Header />
			<Cart />
			{/* <Shopping /> */}
		</Fragment>
	);
}
