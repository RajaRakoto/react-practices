import React from 'react';

import './alert.min.css';

/* utils */
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

/**
 * @description - un composant permettant de generer un bouton attachE a un evenement passE comme props avec un label different
 */
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
			inputLabel: "un exemple d'input (type = text) simple", // description
			input: 'text', // type d'entree
			inputValue: '', // valeur par defaut
			showCancelButton: true, // afficher le bouton annuler
			inputPlaceholder: 'Entrer votre texte ici ...', // placeholder
			confirmButtonText: 'Verifier', // contenu du bouton de confirmation
			confirmButtonColor: '#1abc9c', // couleur du bouton de confirmation
			cancelButtonText: 'Annuler', // contenu du bouton d'annulation
			customClass: 'swal-style', // utilisation d'une class externe pour le style (note: utiliser le role !important pour chaque prop)
			// animation customization
			showClass: {
				popup: 'swal--anim-show',
			},
			hideClass: {
				popup: 'swal--anim-hide',
			},
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
				icon: 'success', // status (success, error, info, warning)
				html: `<span>Votre texte est "${inputValue}" </span>`, // injecter du code HTML
				confirmButtonColor: '#1abc9c',
			});
		}
	};

	const SampleNotification = async () => {
		reactSwal.fire({
			// position: 'top-end', // position du fenetre dans le DOM
			icon: 'success', // status (success, error, info)
			title: 'Operation effectuer avec success !',
			showConfirmButton: false, // cacher le bouton de confirmation
			timer: 1500, // delai d'affichage
		});
	};

	const SampleConfirmAlert = async () => {
		reactSwal
			.fire({
				title: 'Vous etes sure de vouloir supprimer ?',
				text: 'Vous ne pouvez plus revenir en arriere apres cette operation !',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#d33',
				confirmButtonText: 'Supprimer',
			})
			.then(result => {
				if (result.isConfirmed) {
					reactSwal.fire({
						icon: 'success',
						title: 'Suppression avec success !',
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	const AdvancedConfirmAlert = async () => {
		const swalWithBootstrapButtons = reactSwal.mixin({
			customClass: {
				confirmButton: 'btn btn-success swal-confirm--btn-size',
				cancelButton: 'btn btn-danger swal-confirm--btn-size',
			},
			buttonsStyling: false,
		});

		swalWithBootstrapButtons
			.fire({
				title: 'Vous etes sure de vouloir supprimer ?',
				text: 'Vous ne pouvez plus revenir en arriere apres cette operation !',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonText: 'Oui',
				cancelButtonText: 'Non',
				reverseButtons: true,
			})
			.then(result => {
				if (result.isConfirmed) {
					swalWithBootstrapButtons.fire({
						icon: 'success',
						title: 'Suppression avec success !',
						showConfirmButton: false,
						timer: 1500,
					});
				} else if (result.dismiss === reactSwal.DismissReason.cancel) {
					swalWithBootstrapButtons.fire({
						icon: 'error',
						title: 'Operation annulE !',
						showConfirmButton: false,
						timer: 1500,
					});
				}
			});
	};

	const SampleModalImage = async () => {
		reactSwal.fire({
			title: 'sample modal image',
			text: 'image (400x200)',
			imageUrl: 'https://unsplash.it/400/200',
			imageWidth: 400,
			imageHeight: 200,
			imageAlt: 'modal image example',
		});
	};

	return (
		<React.Fragment>
			<h1>Sweetalert2 example</h1>
			<div className="main">
				<Button event={SampleTextInput} label={'sample text input'} />
				<Button event={SampleNotification} label={'sample notification'} />
				<Button event={SampleConfirmAlert} label={'sample confirm alert'} />
				<Button event={AdvancedConfirmAlert} label={'advanced confirm alert'} />
				<Button event={SampleModalImage} label={'sample modal image'} />
			</div>
		</React.Fragment>
	);
}
