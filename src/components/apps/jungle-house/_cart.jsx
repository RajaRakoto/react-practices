import React from 'react';

/* utils */
import { useCart } from 'react-use-cart';

// ===============================================

/**
 * @description - liste des achats (panier)
 * @feat - getObjectElementValue()
 */
export default function Cart() {
	const {
		isEmpty,
		cartTotal,
		totalUniqueItems,
		items,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();

	const unity = ' Ar';

	// sub components
	const TotalPrice = () => {
		return (
			<span>
				TOTAL: {cartTotal} {unity}
			</span>
		);
	};

	const ValidBtn = ({ isEmpty }) => {
		const handleBuyClick = () => {
			if (isEmpty) {
				alert(
					"⛔ Veuillez ajouter quelque chose dans votre panier avant d'effectuer un achat !",
				);
			} else {
				alert('✅ Jungle house vous remercie pour votre achat ! A bientot ...');
			}
		};

		return (
			<button className="button-33" onClick={handleBuyClick}>
				ACHETER
			</button>
		);
	};

	const CartEmpty = ({ isEmpty }) => {
		return (
			<React.Fragment>
				<h2 className="header">🛒 Panier</h2>
				<div className="body">
					<p style={{ paddingLeft: 20 }}>Votre panier est vide</p>
				</div>
				<h5 className="footer">
					<TotalPrice />
					<br />
					<ValidBtn isEmpty={isEmpty} />
				</h5>
			</React.Fragment>
		);
	};

	const CartCore = () => {
		return (
			<React.Fragment>
				<h2 className="header">
					🛒 Panier <span>{totalUniqueItems}</span>
				</h2>
				<div className="body">
					<ul>
						{items.map(item => (
							<li key={item.id}>
								<span>x {item.quantity} </span>
								{'🌱' + item.name}
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
								<button onClick={() => removeItem(item.id)}>
									Remove &times;
								</button>
							</li>
						))}
					</ul>
					{!isEmpty && (
						<div className="empty-btn">
							<button onClick={emptyCart}>Vider votre panier</button>
						</div>
					)}
				</div>
				<h5 className="footer">
					<TotalPrice />
					<br />
					<ValidBtn isEmpty={isEmpty} />
				</h5>
			</React.Fragment>
		);
	};

	if (isEmpty) {
		return (
			<div id="cart" className="cart--anim">
				<CartEmpty isEmpty={isEmpty} />
			</div>
		);
	} else {
		return (
			<div id="cart" className="cart--anim">
				<CartCore />
			</div>
		);
	}

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
