// TODO: reorganize all [***]

import React from 'react';

/* utils */
import { useMediaQuery } from 'react-responsive';
import { CartProvider } from 'react-use-cart';

/* styles */
import './jungle.min.css';

/* components */
import Header from './_header';
import Footer from './_footer';
import Shopping from './_shopping';
import Cart from './_cart';

// ===============================================

/**
 * @description - le composant parent pour jungle house app
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
					active ? 'col-xl-4 d-flex justify-content-center' : 'col-xl-4'
				}`}
			>
				{children}
			</div>
		);
	};

	return (
		<React.Fragment>
			<Header />
			<CartProvider>
				<main className="container-fluid">
					<div className="row">
						<ReactResponsive
							active={isSmallScreenForCart}
							children={<Cart />}
						/>
						<div className="col-xl-8">
							<Shopping />
						</div>
					</div>
				</main>
			</CartProvider>
			<Footer />
		</React.Fragment>
	);
}
