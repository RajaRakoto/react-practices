import React from 'react';

/* datas */
import { plantList } from '../../../data/plantList';

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

/* mui */
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// TODO: sort plant category [**]
/**
 * @description - triage des plantes par categorie
 * @feat - map() | mui(Button) | react-responsive(mediaquery) | getObjectElementType()
 */
function Categories() {
	const categoriesList = getObjectElementType(plantList, 'category');
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
					{categoriesList.map(category => (
						<Button
							key={category}
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

// TODO: adding to cart [***]
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

	const handleAddClick = plantName => {
		alert(plantName);
	};

	/**
	 * @description - state for plant animation status
	 * Animation scale fix
	 */
	const [animationFlag, setAnimationFlag] = React.useState(true);
	let seconds = plantList.length - 6; // plus le nombre de plante augmente, plus le nombre de seconde ou la class d'animation existe dans le DOM augmente

	const counterID = setInterval(() => {
		countdown();
	}, 1000);

	const countdown = () => {
		if (seconds !== 0) {
			seconds--;
		} else {
			setAnimationFlag(false); // suppression de la class "plant-item--anim"
			clearInterval(counterID);
		}
	};

	return (
		<ul className="plant-list">
			{plantList.map(plant => (
				<li
					key={plant.id.toString()}
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
					<div>
						<button onClick={() => handleAddClick(plant.name)}>Ajouter</button>
					</div>
				</li>
			))}
		</ul>
	);
}

export default class Shopping extends React.Component {
	render() {
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
}
