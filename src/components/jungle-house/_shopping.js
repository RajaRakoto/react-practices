/* datas */
import { plantList } from '../../data/plantList';
/* utils */
import { getObjectElementType } from '../../utils/object';

/**
 * @feat - map() | ternary conditional
 */
export default function Shopping() {
	const categoriesList = getObjectElementType(plantList, 'category');

	const Categories = () => {
		return (
			<ul>
				{categoriesList.map(category => (
					<li key={category}>{category}</li>
				))}
			</ul>
		);
	};

	const Plants = () => {
		return (
			<ul className="plant-list">
				{plantList.map(plant => (
					<li key={plant.id} className="plant-item">
						{plant.name} {plant.isBestSale ? '⭐' : null}
					</li>
				))}
			</ul>
		);
	};

	return (
		<div id="shopping">
			<h2 className="header">🌱 Liste des plantes</h2>
			<Categories />
			<div className="body">
				<Plants />
			</div>
		</div>
	);
}
