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

	return (
		<ul className="plant-list">
			{plantList.map(
				({
					id,
					name,
					category,
					waterValue,
					lightValue,
					isBestSale,
					isSpecialOffer,
					description,
				}) => (
					<li key={id.toString()} className="plant-item">
						<PlantImage name={name} />
						<PlantName name={name} favori={isBestSale} />
						<div className="plant-condition">
							<PlantCondition
								conditionType="water"
								conditionValue={waterValue}
							/>
							<PlantCondition
								conditionType="light"
								conditionValue={lightValue}
							/>
						</div>
						<PlantCategorie category={category} />
						<PlantDescription description={description} />
						<PlantBadge solde={isSpecialOffer} />
					</li>
				),
			)}
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
