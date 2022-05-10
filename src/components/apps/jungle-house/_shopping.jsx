/* datas */
import React from 'react';
import { useMediaQuery } from 'react-responsive';

/* datas */
import { plantList } from '../../../data/plantList';
import plantImg from '../../../assets/images/jungle-logo.png';

/* utils */
import { getObjectElementType } from '../../../utils/object';

/* mui */
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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

/**
 * @description - liste des plantes disponibles a vendre
 * @feat - map() [get property with keyword] | toString() | props | SEO (img)
 */
function Plants() {
	const PlantImage = props => {
		const { name } = props;
		return (
			<img
				src={plantImg}
				alt={`${name}-cover`} // SEO tips
				width="80"
				className="plant-image img-fluid"
			/>
		);
	};

	const PlantName = props => {
		const { name, favori } = props;
		return (
			<div className="plant-name">
				{name} {favori ? <p>⭐</p> : <p style={{ visibility: 'hidden' }}>.</p>}
			</div>
		);
	};

	const PlantCategorie = props => {
		const { category } = props;
		return (
			<Stack direction="row" spacing={1}>
				<Chip label={category} size="small" variant="outlined" />
			</Stack>
		);
	};

	const PlantDescription = props => {
		const { description } = props;
		return <p className="plant-description">{description}</p>;
	};

	const PlantBadge = props => {
		const { solde } = props;
		return (
			<React.Fragment>
				{solde ? <div className="solde-badge">solde</div> : null}
			</React.Fragment>
		);
	};

	const PlantCondition = props => {
		const { conditionType, conditionValue } = props;
		const range = [1, 2, 3];

		return (
			<div>
				{range.map(rangeElem =>
					conditionValue >= rangeElem ? (
						// key notation tips
						<span key={rangeElem.toString()}>
							{conditionType === 'water' ? '💧' : '☀️'}
						</span>
					) : null,
				)}
			</div>
		);
	};

	// Autre methode -> https://github.com/OpenClassrooms-Student-Center/7008001-Debutez-avec-React/blob/P2C5-Solution/src/components/CareScale.js
	const handleClick = (waterValue, lightValue) => {
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

	return (
		<ul className="plant-list">
			{plantList.map(plant => (
				<li
					key={plant.id.toString()}
					className="plant-item"
					onClick={() => handleClick(plant.waterValue, plant.lightValue)}
				>
					<PlantImage name={plant.name} />
					<PlantName name={plant.name} favori={plant.isBestSale} />
					<div className="plant-condition">
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
