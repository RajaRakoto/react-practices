import React from 'react';
import { useMediaQuery } from 'react-responsive';

/* styles */
import './jungle.min.css';

/* components */
import Header from './_header';
import Footer from './_footer';
import Shopping from './_shopping';
import Cart from './_cart';

/**
 *
 * @feat - react-responsive(mediaquery) | bt5 (grid) | className injection | props (children)
 */
export default function Jungle() {
	// func component only
	const isSmallScreenForCart = useMediaQuery({
		query: '(max-width: 1199px)',
	});

	const ReactResponsive = props => {
		const { active, children } = props;

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
