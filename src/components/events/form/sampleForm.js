import React from 'react';
import './form.min.css';

/**
 * @feat - onSubmit() | preventDefault()
 * @description - formulaire non controlE en React
 */
export default function SampleForm() {
	const handleSubmit = e => {
		e.preventDefault();
		alert('ValidE !');
	};

	return (
		<React.Fragment>
			<form id="sample-form">
				<h5>Sample form</h5>
				<input
					type="text"
					name="sample-input"
					placeholder="Entrer un texte ici ..."
					required
				/>
				<button className="button-82-pushable" onSubmit={() => handleSubmit()}>
					<span className="button-82-shadow"></span>
					<span className="button-82-edge"></span>
					<span className="button-82-front text">Valider</span>
				</button>
			</form>
		</React.Fragment>
	);
}
