import React from 'react';

/* datas */
import deleteIco from '../../../assets/icons/delete-ico.svg';
import cartIco from '../../../assets/icons/cart-ico.svg';
import cleanIco from '../../../assets/icons/clean-ico.svg';

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
				<h2 className="header">
					{' '}
					<img src={cartIco} alt="jungle cart" width={70} /> Panier{' '}
				</h2>
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
		// cart items delete validation
		const handleDeleteClick = () => {
			if (
				window.confirm(
					'Vous etes sur de vouloir supprimer le contenu de votre panier ?',
				)
			) {
				emptyCart();
			}
		};

		return (
			<React.Fragment>
				<h2 className="header">
					<img src={cartIco} alt="jungle cart" width={70} /> Panier{' '}
					<span>{totalUniqueItems}</span>
				</h2>
				<div className="body">
					<ul>
						{items.map(item => (
							<li key={item.id}>
								<div className="grid1">
									<span>x {item.quantity} </span>
								</div>
								<div className="grid2">{'🌱' + item.name}</div>
								<div className="grid3">
									<button
										className="button-6"
										onClick={() =>
											updateItemQuantity(item.id, item.quantity - 1)
										}
									>
										-
									</button>
									<button
										className="button-6"
										onClick={() =>
											updateItemQuantity(item.id, item.quantity + 1)
										}
									>
										+
									</button>
									<button
										className="button-6"
										style={{
											backgroundColor: 'rgb(240, 154, 123)',
											color: '#eee',
										}}
										onClick={() => removeItem(item.id)}
									>
										<img src={deleteIco} alt="delete card item" width={19} />
									</button>
								</div>
							</li>
						))}
					</ul>
					{!isEmpty && (
						<div className="empty-btn">
							<button className="button-32" onClick={handleDeleteClick}>
								<img src={cleanIco} alt="clean items" width={30} /> Vider votre
								panier
							</button>
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
			<div id="cart">
				<CartEmpty isEmpty={isEmpty} />
			</div>
		);
	} else {
		return (
			<div id="cart">
				<CartCore />
			</div>
		);
	}
}
