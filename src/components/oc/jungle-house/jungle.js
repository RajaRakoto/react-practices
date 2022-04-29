import React, { Fragment } from 'react';
import './jungle.min.css';
// NOTE: import object
import { plantList } from '../../../data/plantList';

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

	// NOTE: filter() - get an element from object
	const getPlantPrice = id => {
		const plant = plantList.filter(plant => plant.id === id);
		return plant[0].price;
	};

	return (
		<div id="cart">
			<h4>🛒 Panier</h4>
			<ul>
				<li>Monstera: {getPlantPrice('1ed') + unity}</li>
				<li>Yucca: {getPlantPrice('4kk') + unity}</li>
				<li>Olivier: {getPlantPrice('5pl') + unity}</li>
			</ul>
			<h5>
				<span>TOTAL:</span>{' '}
				{getPlantPrice('1ed') + getPlantPrice('4kk') + getPlantPrice('5pl')}
			</h5>
		</div>
	);
}

// TODO: work
function Shopping() {
	// NOTE: reduce() - extrait un liste d'element unique par un mot cle
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[],
	);

	console.table(categories);

	return (
		// <div>
		// 	<ul>
		// 		{categories.map(cat => (
		// 			<li key={cat}>{cat}</li>
		// 		))}
		// 	</ul>
		// 	<ul>
		// 		{plantList.map(plant => (
		// 			<li key={plant.id}>{plant.name}</li>
		// 		))}
		// 	</ul>
		// </div>
		<div></div>
	);
}

export default function Jungle() {
	return (
		<Fragment>
			<Header />
			<Cart />
			<Shopping />
		</Fragment>
	);
}
