import React from 'react';

/* utils */
import { useMediaQuery } from 'react-responsive';
import { CartProvider, useCart } from 'react-use-cart';

/* styles */
import './jungle.min.css';

/* components */
import Header from './_header';
import Footer from './_footer';
import Shopping from './_shopping';
import Cart from './_cart';

// ===============================================

/**
 * @description - le composant mere pour jungle house app
 * @feat - react-responsive(mediaquery) | bt5 (grid) | className injection | props | previousState
 */
export default function Jungle() {
	const isSmallScreenForCart = useMediaQuery({
		query: '(max-width: 1199px)',
	});

	const ReactResponsive = ({ active, children }) => {
		return (
			<div
				className={`${
					active ? 'col-xl-3 d-flex justify-content-center' : 'col-xl-3'
				}`}
			>
				{children}
			</div>
		);
	};

	// TODO: to del
	// const [cartList, setCartList] = React.useState([]); // array

	// /**
	//  * @description - une fonction callback qui permet de recuperer les donnees des plantes (nom et prix) et mettre a jour le state global partagE avec Cart component
	//  */
	// const sendDatatoCart = (PlantName, PlantPrice) => {
	// 	// temporary cartList object
	// 	let updatedCartList = {
	// 		PlantName: PlantName,
	// 		PlantPrice: PlantPrice,
	// 	};

	// 	setCartList(previousState => [...previousState, updatedCartList]);
	// };

	return (
		<React.Fragment>
			<Header />
			<main className="container-fluid">
				<div className="row">
					<ReactResponsive active={isSmallScreenForCart} children={<Cart />} />
					<div className="col-xl-9">
						<Shopping />
					</div>
				</div>
			</main>
			<Footer />
		</React.Fragment>
	);
}
