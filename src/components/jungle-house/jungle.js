import React, { Fragment } from 'react';
import { useMediaQuery } from 'react-responsive';
/* styles */
import './jungle.min.css';
/* datas */
import { plantList } from '../../data/plantList';
/* utils */
import { getObjectElementValue } from '../../utils/object';
/* components */
import Shopping from './_shopping';

function Header() {
	const description = (
		<p>Ici achetez toutes les plantes dont vous avez toujours rêvé</p>
	);
	const title = 'Jungle house';

	/**
	 * @feat - condition | props
	 */
	const Recommendation = () => {
		const currentDate = new Date().getMonth();
		const isSpring = currentDate >= 2 && currentDate <= 5;
		const RecomNotif = props => {
			return (
				<div className={props.status} role="alert">
					<strong>Recommendation:</strong> {props.message}
				</div>
			);
		};

		if (!isSpring) {
			return (
				<RecomNotif
					message="ce n'est pas le moment de rempoter !"
					status="alert alert-warning"
				/>
			);
		} else {
			return (
				<RecomNotif
					message="c'est le printemps, rempotez !"
					status="alert alert-success"
				/>
			);
		}
	};

	return (
		<Fragment>
			<div id="banner">
				<div id="official-logo"></div>
				<h1 id="title"> {title.toUpperCase()}</h1>
				<h3 id="description"> {description}</h3>
			</div>
			<div id="notification">
				<Recommendation />
			</div>
		</Fragment>
	);
}

function Cart() {
	const unity = ' Ar';

	return (
		<div id="cart">
			<h2 className="header">🛒 Panier</h2>
			<div className="body">
				<ul>
					<li>
						Monstera: {getObjectElementValue(plantList, '1ed', 'price') + unity}
					</li>
					<li>
						Yucca: {getObjectElementValue(plantList, '4kk', 'price') + unity}
					</li>
					<li>
						Olivier: {getObjectElementValue(plantList, '5pl', 'price') + unity}
					</li>
				</ul>
			</div>
			<h5 className="footer">
				<span>TOTAL:</span>{' '}
				{getObjectElementValue(plantList, '1ed', 'price') +
					getObjectElementValue(plantList, '4kk', 'price') +
					getObjectElementValue(plantList, '5pl', 'price')}
			</h5>
		</div>
	);
}

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
