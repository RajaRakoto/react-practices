import React from 'react';

import './alert.min.css';

/* utils */
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function Button({ event, label }) {
	return (
		<button
			className="button-82-pushable"
			onClick={event}
			style={{ width: 200 }}
		>
			<span className="button-82-shadow"></span>
			<span className="button-82-edge"></span>
			<span className="button-82-front text">{label}</span>
		</button>
	);
}

export default function SweetAlert2() {
	const reactSwal = withReactContent(Swal);

	const SampleTextInput = async () => {
		const { value: inputValue } = await reactSwal.fire({
			title: 'sample text input', // titre
			inputLabel: "un exemple d'input (text) simple", // description
			input: 'text', // type d'entree
			inputValue: '', // valeur par defaut
			showCancelButton: true, // afficher le bouton annuler
			inputPlaceholder: 'Entrer votre texte ici ...', // placeholder
			confirmButtonText: 'Verifier', // contenu du bouton de confirmation
			confirmButtonColor: '#1abc9c', // couleur du bouton de confirmation
			cancelButtonText: 'Annuler', // contenu du bouton d'annulation
			customClass: 'swal-style', // utilisation d'une class externe pour le style (note: utiliser le role !important pour chaque prop)
			// width: '600px', // modifier la taille du modal
			// verificateur
			inputValidator: value => {
				if (!value) {
					return 'Vous devez entrer quelque chose !';
				}

				if (!isNaN(value)) {
					return 'Vous devez entrer un texte mais pas un nombre !';
				}
			},
		});

		if (inputValue) {
			reactSwal.fire({
				icon: 'success', // status (success, error, info)
				html: `<span>Votre texte est ${inputValue}</span>`, // injecter du code HTML
				confirmButtonColor: '#1abc9c',
			});
		}
	};

	return (
		<React.Fragment>
			<h1>Sweetalert2 example</h1>
			<div className="main">
				<Button event={SampleTextInput} label={'sample text input'} />
			</div>
		</React.Fragment>
	);
}
