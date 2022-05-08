import React from 'react';

export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<h6>Pour les passionné·e·s de plantes 🌿🌱🌵</h6>
				<div className="email">
					<label htmlFor="email">Laissez-nous votre e-mail:</label>
					<input type="text" name="email" />
				</div>
			</footer>
		);
	}
}
