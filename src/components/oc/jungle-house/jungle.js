import React, { Fragment } from 'react';
/* styles */
import './jungle.min.css';
/* datas */
import { plantList } from '../../../data/plantList';
/* utils */
import {
	getObjectElementValue,
	getObjectElementType,
} from '../../../utils/object';

function Header() {
	const description = (
		<p>Ici achetez toutes les plantes dont vous avez toujours rêvé</p>
	);
	const title = 'Jungle house';

	const Recommendation = () => {
		const currentDate = new Date().getMonth();
		const isSpring = currentDate >= 2 && currentDate <= 5;

		if (!isSpring) {
			return (
				<div class="alert alert-warning" role="alert">
					<strong>Recommendation:</strong> ce n'est pas le moment de rempoter !
				</div>
			);
		} else {
			return (
				<div class="alert alert-success" role="alert">
					<strong>Recommendation:</strong> c'est le printemps, rempotez !
				</div>
			);
		}
	};

	return (
		<div id="banner">
			<div id="official-logo"></div>
			<h1 id="title"> {title.toUpperCase()}</h1>
			<h3 id="description"> {description}</h3>
			<Recommendation />
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

/**
 * @feat - map() | ternary conditional
 */
function Shopping() {
	const categoriesList = getObjectElementType(plantList, 'category');

	return (
		<div id="shopping">
			{/* liste des differentes types de categorie de plante  */}
			<h2 className="header">🌱 Liste des plantes</h2>
			<div className="body">
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
