import React from 'react';

// ===============================================

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
				<ul>
					{cartList.map((list, index) => (
						<li key={'lst-' + index}>
							{list.PlantName} {list.PlantPrice} {unity}
						</li>
					))}
				</ul>
			</div>
			<h5 className="footer">
				<span>TOTAL:</span>{' '}
			</h5>
		</div>
	);
}
