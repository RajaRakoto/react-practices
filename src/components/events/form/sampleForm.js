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

// TODO: working
/**
 * @feat - onSubmit() | onChange() | preventDefault() | useState() | get input & textarea value
 * @description - formulaire controllE en React
 */
function ControlledForm() {
	/**
	 * @messageValue - contient la valeur en input de textarea ainsi sa valeur initiale grace a l'argument de useState()
	 * @setMessageValue - une fonction permettant de modifier "messageValue" a chaque saisi dans textarea grace a l'event onChange() dont l'argument est la valeur recuperer par l'evenement syntetic "e.target.value"
	 * @useState - permet d'utiliser l'etat local (state) pour "messageValue"
	 */
	const [messageValue, setMessageValue] = React.useState(
		'Si vous avez des questions, posez les par ici ...',
	);

	const handleSubmit = () => {
		alert('validE !');
	};

	return (
		<React.Fragment>
			<form id="controlled-form" onSubmit={handleSubmit}>
				<h5>Controlled form</h5>
				<input
					type="text"
					name="controlled-input-pseudo"
					placeholder="Entrer votre pseudo ici ..."
				/>
				<input
					type="number"
					name="controlled-input-age"
					placeholder="Entrer votre age ici ..."
					min="12"
				/>
				<textarea
					cols="30"
					rows="10"
					// value={messageValue}
					placeholder={messageValue}
					onChange={e => setMessageValue(e.target.value)}
				></textarea>
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
