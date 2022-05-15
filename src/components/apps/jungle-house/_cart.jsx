import React from 'react';

/* utils */
import { CartProvider, useCart } from 'react-use-cart';

// ===============================================

// TODO: calcul sum of price [***]
/**
 * @description - liste des achats (panier)
 * @feat - getObjectElementValue()
 */
export default function Cart() {
	const unity = ' Ar';

	const {
		isEmpty,
		cartTotal,
		totalUniqueItems,
		items,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	if (isEmpty) return <p>Your cart is empty</p>;

	return (
		<div id="cart">
			<h1>
				Cart ({totalUniqueItems} - {cartTotal})
			</h1>

			{!isEmpty && <button onClick={emptyCart}>Empty cart</button>}

			<ul>
				{items.map(item => (
					<li key={item.id}>
						{item.quantity} x {item.name}
						<button
							onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
						>
							-
						</button>
						<button
							onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
						>
							+
						</button>
						<button onClick={() => removeItem(item.id)}>Remove &times;</button>
					</li>
				))}
			</ul>
		</div>
	);

	// return (
	// 	<div id="cart">
	// 		{/* <h2 className="header">🛒 Panier</h2>
	// 		<div className="body">
	// 			<ul>
	// 				{cartList.map((list, index) => (
	// 					<li key={'lst-' + index}>
	// 						🌱 <strong>{list.PlantName}</strong> {list.PlantPrice} {unity}
	// 					</li>
	// 				))}
	// 			</ul>
	// 		</div>
	// 		<h5 className="footer">
	// 			<span>
	// 				TOTAL: {totalPrice.current} {unity}
	// 			</span>{' '}
	// 			<br />
	// 			<button className="button-33">
	// 				ACHETER
	// 			</button>
	// 		</h5> */}
	// 	</div>
	// );
}
