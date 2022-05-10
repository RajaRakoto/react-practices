import React from 'react';

// TODO: del recomNotif onClick()
/**
 * @description - liste des recommendations pour les clients 
 * @feat - props | Date
 */
function Recommendation() {
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
}

export default class Header extends React.Component {
	render() {
		const description =
			'Ici achetez toutes les plantes dont vous avez toujours rêvé ';
		const title = 'Jungle house';
		return (
			<header>
				<div id="banner">
					<div id="official-logo"></div>
					<h1 id="title"> {title.toUpperCase()}</h1>
					<h3 id="description"> {description}</h3>
					<div id="notification">
						<Recommendation />
					</div>
				</div>
			</header>
		);
	}
}
