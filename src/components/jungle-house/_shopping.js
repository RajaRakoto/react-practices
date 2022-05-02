/* datas */
import { plantList } from '../../data/plantList';
import plantImg from '../../assets/images/jungle-logo.png';
/* utils */
import { getObjectElementType } from '../../utils/object';

/**
 * @feat - map() | ternary conditional | getObjectElementType()
 */
export default function Shopping() {
	const categoriesList = getObjectElementType(plantList, 'category');

	const Categories = () => {
		return (
			<ul className="categories-list">
				{categoriesList.map(category => (
					<li key={category} className="categories-item">
						{category}
					</li>
				))}
			</ul>
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
