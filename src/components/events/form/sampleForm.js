import React from 'react';
import './form.min.css';

// TODO: verified
/**
 * @feat - onSubmit() | preventDefault() | get input value
 * @description - formulaire non controlE en React
 */
export default function SampleForm() {
	const handleSubmit = e => {
		e.preventDefault();
		alert(e.target['sample-input'].value);
	};

	return (
		<React.Fragment>
			<form id="sample-form" onSubmit={handleSubmit}>
				<h5>Sample form</h5>
				<input
					type="text"
					name="sample-input"
					placeholder="Entrer un texte ici ..."
				/>
				<button className="button-82-pushable">
					<span className="button-82-shadow"></span>
					<span className="button-82-edge"></span>
					<span className="button-82-front text">Valider</span>
				</button>
			</form>
		</React.Fragment>
	);
}
