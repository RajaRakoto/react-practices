import React from 'react';
import { useMediaQuery } from 'react-responsive';

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

	// state
	const [cartList, setCartList] = React.useState([]); // array

	// callback func
	const sendDatatoCart = cartData => {
		setCartList(previousState => [...previousState, cartData]);
	};

	return (
		<React.Fragment>
			<Header />
			<main className="container-fluid">
				<div className="row">
					<ReactResponsive
						active={isSmallScreenForCart}
						children={<Cart cartList={cartList} />}
					/>
					<div className="col-xl-9">
						<Shopping sendDatatoCart={sendDatatoCart} />
					</div>
				</div>
			</main>
			<Footer />
		</React.Fragment>
	);
}
