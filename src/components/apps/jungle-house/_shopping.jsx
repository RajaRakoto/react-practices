import React from 'react';

/* datas */
import { plantsProducts } from '../../../data/plants';

/* deps */
import {
	PlantImage,
	PlantPrice,
	PlantName,
	PlantCondition,
	PlantCategorie,
	PlantDescription,
	PlantBadge,
} from './deps/_plants-deps';

/* utils */
import { useMediaQuery } from 'react-responsive';
import { getObjectElementType } from '../../../utils/object';
import { animationCleaner } from '../../../utils/anim';

/* mui */
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// ===============================================

/**
 * @description - triage des plantes par categorie
 * @feat - map() | mui(Button) | react-responsive(mediaquery) | getObjectElementType()
 */
function Categories() {
	const categoriesList = getObjectElementType(plantsProducts, 'category');
	const isSmallScreenForCategories = useMediaQuery({
		query: '(max-width: 537px)',
	});

	return (
		<React.Fragment>
			<div className="categories-list">
				<Stack
					spacing={3}
					direction={isSmallScreenForCategories ? 'column' : 'row'}
				>
					{categoriesList.map((category, index) => (
						<Button
							key={'cat-' + index}
							className="categories-item"
							variant="contained"
						>
							{category}
						</Button>
					))}
				</Stack>
			</div>
		</React.Fragment>
	);
}

/**
 * @description - liste des plantes disponibles a vendre
 * @feat - map() [get property with keyword] | toString() | props | SEO (img) | setInterval() | className deleting
 */
function Plants() {
	/**
	 * @description - information sur chaque plante (alert)
	 * Autre methode -> https://github.com/OpenClassrooms-Student-Center/7008001-Debutez-avec-React/blob/P2C5-Solution/src/components/CareScale.js
	 */
	const handleConditionClick = (waterValue, lightValue) => {
		const conditionalCkecker = conditionValue => {
			let result = '';

			conditionValue === 1
				? (result = 'peu')
				: conditionValue === 2
				? (result = 'modérement')
				: (result = 'beaucoup');

			return result;
		};

		alert(
			`Cette plante requiert ${conditionalCkecker(
				waterValue,
			)} d'arrosage (💧) et ${conditionalCkecker(lightValue)} de lumière (☀️)`,
		);
	};

	// TODO: to del
	// // cart adding
	// const handleAddClick = (plantName, plantPrice) => {
	// 	sendDatatoCart(plantName, plantPrice);
	// };

	const handleAddClick = () => {
		console.log('clicked !');
	};

	// animation cleaner
	const [animationFlag, setAnimationFlag] = React.useState(true);
	animationCleaner(setAnimationFlag, plantsProducts.length - 6);

	return (
		<ul className="plant-list">
			{plantsProducts.map((plant, index) => (
				<li
					key={'plt-' + index}
					className={
						animationFlag
							? 'plant-item plant-item-anim--1'
							: 'plant-item plant-item-anim--2'
					}
				>
					<PlantImage name={plant.name} />
					<PlantPrice price={plant.price} />
					<PlantName name={plant.name} favori={plant.isBestSale} />
					<div
						className="plant-condition"
						onClick={() =>
							handleConditionClick(plant.waterValue, plant.lightValue)
						}
					>
						<PlantCondition
							conditionType="water"
							conditionValue={plant.waterValue}
						/>
						<PlantCondition
							conditionType="light"
							conditionValue={plant.lightValue}
						/>
					</div>
					<PlantCategorie category={plant.category} />
					<PlantDescription description={plant.description} />
					<PlantBadge solde={plant.isSpecialOffer} />

					<button className="button-55" onClick={() => handleAddClick()}>
						Ajouter
					</button>
				</li>
			))}
		</ul>
	);
}

export default function Shopping({ sendDatatoCart }) {
	return (
		<div id="shopping">
			<h2 className="header">🌱 Liste des plantes</h2>
			<div id="categories">
				<Categories />
			</div>
			<div className="body">
				<Plants />
			</div>
		</div>
	);
}
