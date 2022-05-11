import React from 'react';

/* datas */
import plantImg from '../../../../assets/images/jungle-logo.png';

/* mui */
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export const PlantImage = props => {
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

export const PlantPrice = props => {
	const unity = ' Ar';
	const { price } = props;
	return (
		<div className="d-flex flex-row-reverse plant-price">
			<div className="price-label">
				{price} {unity}
			</div>
		</div>
	);
};

export const PlantName = props => {
	const { name, favori } = props;
	return (
		<div className="plant-name">
			{name} {favori ? <p>⭐</p> : <p style={{ visibility: 'hidden' }}>.</p>}
		</div>
	);
};

export const PlantCategorie = props => {
	const { category } = props;
	return (
		<Stack direction="row" spacing={1}>
			<Chip label={category} size="small" variant="outlined" />
		</Stack>
	);
};

export const PlantDescription = props => {
	const { description } = props;
	return <p className="plant-description">{description}</p>;
};

export const PlantBadge = props => {
	const { solde } = props;
	return (
		<React.Fragment>
			{solde ? <div className="solde-badge">solde</div> : null}
		</React.Fragment>
	);
};

export const PlantCondition = props => {
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
