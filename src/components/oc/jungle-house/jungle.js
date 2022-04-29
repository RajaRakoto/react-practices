import React, { Fragment } from 'react';
import './jungle.min.css';
import { plantList } from '../../../data/plantList';

/// ----------- UTILITIES -----------
/**
 * @description extraire un element particulier dans un tableau d'objet
 * @param {object} obj - tableau d'objet a filtrer
 * @param {string} id - identifiant de l'element de l'objet
 * @param {string} key - le mot cle a extraire (sa valeur)
 * @returns {*} la valeur de l'argument `key` de l'element portant l'identifiant `id` de l'objet `obj`
 * @example getObjectElement(plantList, '3sd', 'price');
 */
const getObjectElement = (obj, id, key) => {
	const result = obj.filter(obj => obj.id === id);

	if (key === 'name') {
		return result[0].name;
	} else if (key === 'category') {
		return result[0].category;
	} else if (key === 'price') {
		return result[0].price;
	}
};

/// ----------- COMPONENTS -----------
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
	const unity = ' Ar';

	return (
		<div id="cart">
			<h4>🛒 Panier</h4>
			<ul>
				<li>Monstera: {getObjectElement(plantList, '1ed', 'price') + unity}</li>
				<li>Yucca: {getObjectElement(plantList, '4kk', 'price') + unity}</li>
				<li>Olivier: {getObjectElement(plantList, '5pl', 'price') + unity}</li>
			</ul>
			<h5>
				<span>TOTAL:</span>{' '}
				{getObjectElement(plantList, '1ed', 'price') +
					getObjectElement(plantList, '4kk', 'price') +
					getObjectElement(plantList, '5pl', 'price')}
			</h5>
		</div>
	);
}

// NOTE: reduce() - extrait une liste de valeur unique par un mot cle (category)
// const getUniqueList = () => {
// 	const categories = plantList.reduce(
// 		(acc, plant) =>
// 			acc.includes(plant.category) ? acc : acc.concat(plant.category),
// 		[],
// 	);
// };

// TODO: work
function Shopping() {
	// const getCategoryList = () => {
	// 	const categories = plantList.reduce(
	// 		(acc, plant) =>
	// 			acc.includes(plant.category) ? acc : acc.concat(plant.category),
	// 		[],
	// 	);

	// 	return categories;
	// };

	// console.table(categories);

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
