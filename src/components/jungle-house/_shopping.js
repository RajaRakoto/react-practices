/* datas */
import React, { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
/* datas */
import { plantList } from '../../data/plantList';
import plantImg from '../../assets/images/jungle-logo.png';
/* utils */
import { getObjectElementType } from '../../utils/object';
/* mui */
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

/**
 * @feat - map() | ternary conditional | getObjectElementType()
 */
export default function Shopping() {
	const categoriesList = getObjectElementType(plantList, 'category');

	/**
	 * @feat - map() | mui(Button) | react-responsive(mediaquery)
	 */
	const Categories = () => {
		const isSmallScreenForCategories = useMediaQuery({
			query: '(max-width: 537px)',
		});

		return (
			<Fragment>
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
			</Fragment>
		);
	};

	/**
	 * @feat - map()
	 */
	const Plants = () => {
		const PlantImage = () => {
			return (
				<img
					src={plantImg}
					alt="plant-img"
					width="80"
					className="plant-image img-fluid"
				/>
			);
		};

		const PlantName = props => {
			const { name, favori } = props;
			return (
				<div id="plant-name">
					{name}{' '}
					{favori ? <p>⭐</p> : <p style={{ visibility: 'hidden' }}>.</p>}
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
			return <p id="plant-description">{description}</p>;
		};

		const PlantBadge = props => {
			const { solde } = props;
			return (
				<Fragment>
					{solde ? <div className="solde-badge">solde</div> : null}
				</Fragment>
			);
		};

		/**
		 * @feat - map() | toString()
		 */
		const PlantCondition = props => {
			const { conditionType, conditionValue } = props;
			const range = [1, 2, 3];

			return (
				<div>
					{range.map(rangeElem =>
						conditionValue >= rangeElem ? (
							<span key={rangeElem.toString()}>☀️</span>
						) : null,
					)}
				</div>
			);
		};

		return (
			<ul className="plant-list">
				{plantList.map(plant => (
					<li key={plant.id} className="plant-item">
						<PlantImage />
						<PlantName name={plant.name} favori={plant.isBestSale} />
						<PlantCategorie category={plant.category} />
						<PlantDescription description={plant.description} />
						<PlantBadge solde={plant.isSpecialOffer} />
						<PlantCondition conditionValue={3} />
					</li>
				))}
			</ul>
		);
	};

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
