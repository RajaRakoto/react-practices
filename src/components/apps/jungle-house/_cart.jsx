/* datas */
import { plantList } from '../../../data/plantList';

/* utils */
import { getObjectElementValue } from '../../../utils/object';

// ===============================================

// TODO: adding to cart | hot change (rerender) [***]
/**
 * @description - liste des achats (panier)
 * @feat - getObjectElementValue()
 */
export default function Cart({ cartList }) {
	const unity = ' Ar';

	return (
		<div id="cart">
			<h2 className="header">🛒 Panier</h2>
			<div className="body">
				{/* <ul>
					<li>
						Monstera: {getObjectElementValue(plantList, '1ed', 'price') + unity}
					</li>
					<li>
						Yucca: {getObjectElementValue(plantList, '4kk', 'price') + unity}
					</li>
					<li>
						Olivier: {getObjectElementValue(plantList, '5pl', 'price') + unity}
					</li>
				</ul> */}
				<ul>
					{cartList.map((list, index) => (
						<li key={'lst-' + index}>{list}</li>
					))}
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
