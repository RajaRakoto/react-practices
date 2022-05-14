import React from 'react';

/* datas */
import githubIco from '../../../assets/icons/github-ico.svg';

/* mui */
import Button from '@mui/material/Button';

// ===============================================

/**
 * @description - lien vers github
 */
function Link() {
	return (
		<div className="footer--1">
			<img src={githubIco} alt="github-link" width={50} />
			<h6>Pour les passionné(es) de plantes 🌿🌱🌵</h6>
		</div>
	);
}

/**
 * @description - newsletter des clients
 * @feat - onChange() | onBlur() | useState()
 */
function Email() {
	const [email, setEmail] = React.useState('');
	let emailValidation = false;

	const handleBlur = () => {
		if (!email.includes('@')) {
			alert('⛔ Ce mail est invalide !');
			setEmail('');
		} else {
			emailValidation = true;
		}
	};

	const handleClick = () => {
		alert(
			`${
				emailValidation
					? '✅ Merci de nous reseigner votre e-mail !'
					: '❓ Veuillez reseigner votre e-mail !'
			}`,
		);
	};

	return (
		<div className="footer--2">
			<div id="email" className="input-group input-group-sm">
				<div className="input-group-prepend">
					<span className="input-group-text" id="inputGroup-sizing-sm">
						Laissez-nous votre mail
					</span>
				</div>
				<input
					value={email}
					type="text"
					className="form-control"
					aria-label="Small"
					aria-describedby="inputGroup-sizing-sm"
					onChange={e => setEmail(e.target.value)}
					onBlur={handleBlur}
				/>
			</div>
			<Button
				variant="contained"
				color="success"
				className="email-btn"
				onClick={handleClick}
			>
				Enregistrer
			</Button>
		</div>
	);
}

export default class Footer extends React.Component {
	render() {
		return (
			<footer className="container-fluid">
				<div className="row">
					<div className="col-12-sm col-md-6">
						<Link />
					</div>
					<div className="col-12-sm col-md-6">
						<Email />
					</div>
				</div>
			</footer>
		);
	}
}
