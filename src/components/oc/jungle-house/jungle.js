import React, { Fragment } from 'react';
import './jungle.min.css';
import { plantList } from '../../../data/plantList';

/// ----------- UTILITIES -----------
/**
 * @description extraire un element particulier dans un tableau d'objet (ex: le prix d'un olivier)
 * @param {object} obj - tableau d'objet a filtrer
 * @param {string} id - identifiant de l'element de l'objet
 * @param {string} key - le mot cle a extraire (sa valeur)
 * @returns {*} la valeur de l'argument `key` de l'element portant l'identifiant `id` de l'objet `obj`
 * @example getObjectElementValue(plantList, '5pl', 'price');
 */
const getObjectElementValue = (obj, id, key) => {
	const result = obj.filter(obj => obj.id === id);

	if (key === 'name') {
		return result[0].name;
	} else if (key === 'category') {
		return result[0].category;
	} else if (key === 'price') {
		return result[0].price;
	}
};

/**
 * @description extraire une liste de valeur unique dans un tableau d'objet (ex: les differentes type de categorie de plante)
 * @param {object} obj - tableau d'objet a filter
 * @param {string} key - le mot cle a extraire (liste de sa valeur unique)
 * @returns {array} la liste de la valeur unique contenant dans le tableau d'objet
 * @example getObjectElementType(plantList, 'category')
 */
const getObjectElementType = (obj, key) => {
	if (key === 'category') {
		var result = obj.reduce(
			(acc, obj) =>
				acc.includes(obj.category) ? acc : acc.concat(obj.category),
			[],
		);
	} else if (key === 'name') {
		result = obj.reduce(
			(acc, obj) => (acc.includes(obj.name) ? acc : acc.concat(obj.name)),
			[],
		);
	} else if (key === 'id') {
		result = obj.reduce(
			(acc, obj) => (acc.includes(obj.id) ? acc : acc.concat(obj.id)),
			[],
		);
	} else if (key === 'price') {
		result = obj.reduce(
			(acc, obj) => (acc.includes(obj.price) ? acc : acc.concat(obj.price)),
			[],
		);
	}
	return result;
};

/// ----------- COMPONENTS -----------
function Header() {
	const description = (
		<p>Ici achetez toutes les plantes dont vous avez toujours rêvé</p>
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
			<h2 className="header">🛒 Panier</h2>
			<div className="body">
				<ul>
					<li>
						Monstera: {getObjectElementValue(plantList, '1ed', 'price') + unity}
					</li>
					<li>
						Yucca: {getObjectElementValue(plantList, '4kk', 'price') + unity}
					</li>
					<li>
						Olivier: {getObjectElementValue(plantList, '5pl', 'price') + unity}
					</li>
				</ul>
			</div>
			<h5 className="footer">
				<span>TOTAL:</span>{' '}
				{getObjectElementValue(plantList, '1ed', 'price') +
					getObjectElementValue(plantList, '4kk', 'price') +
					getObjectElementValue(plantList, '5pl', 'price')}
			</h5>
		</div>
	);
}

// TODO: work
function Shopping() {
	const categoriesList = getObjectElementType(plantList, 'category');

	return (
		<div id="shopping">
			{/* liste des differentes types de categorie de plante  */}
			<h2 class="title">🌱 Liste des plantes</h2>
			<div className="content">
				<ul>
					{categoriesList.map(category => (
						<li key={category}>{category}</li>
					))}
				</ul>
				{/* liste de toutes les plantes  */}
				<ul>
					{plantList.map(plant => (
						<li key={plant.id}>
							{plant.name} {plant.isBestSale ? '⭐' : null}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default function Jungle() {
	return (
		<Fragment>
			<Header />
			<div id="jungle_container">
				<Cart />
				<Shopping />
			</div>
		</Fragment>
	);
}
