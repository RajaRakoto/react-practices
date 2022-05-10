import React from 'react';

/* datas */
import { Pers } from '../../../data/pers';

/* styles */
import './departement.min.css';

/* components */
import Stacks from './_stacks';

// FIXME: handleClick Departement
/**
 * @feat - useState() | onClick()
 */
export default function Departement() {
	let [state, setState] = React.useState();
	state = { Pers };

	const handleClick = () => {};

	return (
		<div>
			<h1>Departement</h1>
			<ul id="pers-list">
				{state.Pers.map(pers => (
					<li key={pers.id.toString()} className="pers-item">
						<div className="header">
							<p>
								{' '}
								<strong>admin</strong> {pers.admin ? '✅' : '⛔'}
							</p>
						</div>
						<div className="body">
							<p>
								{' '}
								<strong>pseudo </strong>
								{pers.pseudo}
							</p>
							<p>
								{' '}
								<strong>age</strong> {pers.age}
							</p>
							<p>
								{' '}
								<strong>email</strong> {pers.email}
							</p>
							<Stacks pers={pers} />
						</div>
						<div className="footer">
							<button
								className="button-82-pushable"
								onClick={() => handleClick(pers.name)} // on n'utilise jamais la parenthese vide si le callback ne contient pas un argument
							>
								<span className="button-82-shadow"></span>
								<span className="button-82-edge"></span>
								<span className="button-82-front text">Vieillir</span>
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
