import React from 'react';

/* styles */
import './forms.min.css';

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
 * @feat - onSubmit() | onChange() | onBlur() | preventDefault() | useState() | formChecker() | get input & textarea value | ternary conditional manipulation
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

	const [email, setEmail] = React.useState('');

	const handleSubmit = e => {
		e.preventDefault();

		// get all input value
		const pseudo = e.target['controlled-input-pseudo'].value;
		const age = e.target['controlled-input-age'].value;
		const message = e.target['controlled-input-message'].value;

		// errors var
		let errorMessage;
		let errorStatus = false;

		// form controller
		const formChecker = (condition, message) => {
			if (condition) {
				errorMessage = message;
				errorStatus = true;
			}
		};

		formChecker(
			isNaN(age),
			'⛔ vous avez entrE un texte, veuillez entrer votre age',
		);

		formChecker(age === '', '⛔ Veuillez reseigner votre age');

		errorStatus
			? alert(errorMessage)
			: alert(`    Pseudo: ${pseudo}
    age: ${
			!errorStatus && age < 18
				? age + ' (mineur)'
				: !errorStatus && age >= 18
				? age + ' (majeur)'
				: errorMessage
		}
    ${message !== '' ? '✅ Message envoyE !' : ''}`);
	};

	const handleBlur = () => {
		if (!email.includes('@')) {
			alert('Ce mail est invalide !');
			setEmail(''); // reset email state value
		}
	};

	return (
		<React.Fragment>
			<form id="controlled-form" onSubmit={handleSubmit}>
				<h5>Controlled form</h5>
				<input
					type="text"
					name="controlled-input-pseudo"
					placeholder="Entrer votre pseudo ici ..."
					required
				/>
				<input
					value={email}
					type="text"
					placeholder="Entrer votre e-mail ici ..."
					required
					onBlur={handleBlur}
					onChange={e => setEmail(e.target.value)}
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
					name="controlled-input-message"
					placeholder={messageValue}
					onChange={e => setMessageValue(e.target.value)}
				></textarea>
				<ValidBtn />
			</form>
		</React.Fragment>
	);
}

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
