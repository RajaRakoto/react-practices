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
	 * @feat - mui(Button) | react-responsive(mediaquery)
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

	const Plants = () => {
		return (
			<ul className="plant-list">
				{plantList.map(plant => (
					<li key={plant.id} className="plant-item">
						{plant.isBestSale ? (
							<p>⭐</p>
						) : (
							<p style={{ visibility: 'hidden' }}>.</p>
						)}
						<img
							src={plantImg}
							alt="plant-img"
							width="80"
							className="plant-image img-fluid"
						/>
						<p id="plant-name">{plant.name}</p>
						<p id="plant-description">{plant.description}</p>
						{plant.isSpecialOffer ? (
							<Stack spacing={1} alignItems="center">
								<Stack direction="row" spacing={1}>
									<Chip label="solde" color="primary"/>
								</Stack>
							</Stack>
						) : null}
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
