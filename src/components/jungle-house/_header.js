import React, { Fragment } from 'react';

export default function Header() {
	const description = (
		<p>Ici achetez toutes les plantes dont vous avez toujours rêvé</p>
	);
	const title = 'Jungle house';

	/**
	 * @feat - condition | props | Date
	 */
	const Recommendation = () => {
		const currentDate = new Date().getMonth();
		const isSpring = currentDate >= 2 && currentDate <= 5;
		const RecomNotif = props => {
			const { status, message } = props;
			return (
				<div className={status} role="alert">
					<strong>Recommendation:</strong> {message}
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
