import React from 'react';

// ===============================================

// TODO: calcul sum of price [***]
/**
 * @description - liste des achats (panier)
 * @feat - getObjectElementValue()
 */
export default function Cart() {
	const unity = ' Ar';
	const totalPrice = React.useRef(0);

	React.useEffect(() => {
		totalPrice.current = totalPrice.current + 1;
	});

	return (
		<div id="cart">
			{/* <h2 className="header">🛒 Panier</h2>
			<div className="body">
				<ul>
					{cartList.map((list, index) => (
						<li key={'lst-' + index}>
							🌱 <strong>{list.PlantName}</strong> {list.PlantPrice} {unity}
						</li>
					))}
				</ul>
			</div>
			<h5 className="footer">
				<span>
					TOTAL: {totalPrice.current} {unity}
				</span>{' '}
				<br />
				<button className="button-33">
					ACHETER
				</button>
			</h5> */}
		</div>
	);
}
