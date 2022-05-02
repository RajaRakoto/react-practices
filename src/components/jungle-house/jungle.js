import React, { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
/* styles */
import './jungle.min.css';
/* components */
import Header from './_header';
import Shopping from './_shopping';
import Cart from './_cart';

/**
 *
 * @feat - react-responsive (useMediaQuery) | bt5 (grid) | className injection
 */
export default function Jungle() {
	const isSmallScreen = useMediaQuery({
		query: '(max-width: 1199px)',
	});

	const ReactResponsive = props => (
		<div
			className={`${
				props.active ? 'col-xl-3 d-flex justify-content-center' : 'col-xl-3'
			}`}
		>
			{props.children}
		</div>
	);

	return (
		<Fragment>
			<div id="header_container">
				<Header />
			</div>
			<div id="main_container" className="container">
				<div className="row">
					<ReactResponsive active={isSmallScreen} children={<Cart />} />
					<div className="col-xl-9">
						<Shopping />
					</div>
				</div>
			</div>
		</Fragment>
	);
}
