import React from 'react';
import './form.min.css';

// TODO: verified
/**
 * @description - button de validation pour chaque formulaire (independant)
 */
const ValidBtn = () => {
	return (
		<button className="button-82-pushable">
			<span className="button-82-shadow"></span>
			<span className="button-82-edge"></span>
			<span className="button-82-front text">Valider</span>
		</button>
	);
};

// TODO: verified
/**
 * @feat - onSubmit() | preventDefault() | get input value
 * @description - formulaire non controlE en React
 */
function SampleForm() {
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
				<ValidBtn />
			</form>
		</React.Fragment>
	);
}

/**
 * @feat - onSubmit() | preventDefault() | get input value
 * @description - formulaire controllE en React
 */
function ControlledForm() {
	return (
		<React.Fragment>
			<form id="controlled-form">
				<h5>Controlled form</h5>
				<input
					type="text"
					name="controlled-input-name"
					placeholder="Entrer votre nom ici ..."
				/>
				<input
					type="number"
					name="controlled-input-age"
					placeholder="Entrer votre age ici ..."
					min="12"
				/>
				<ValidBtn />
			</form>
		</React.Fragment>
	);
}

// TODO: verified
export default class Forms extends React.Component {
	render() {
		return (
			<React.Fragment>
				<SampleForm />
				<ControlledForm />
			</React.Fragment>
		);
	}
}
