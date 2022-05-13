import React from 'react';

/* datas */
import { Pers } from '../../../data/pers';

/* styles */
import './departement.min.css';

/* components */
import Stacks from './_stacks';

/**
 * @feat - useState() | onClick() | data incrementation
 */
export default function Departement() {
	// def state
	let [state, setState] = React.useState(null);
	state = { Pers };

	const handleClick = pers => {
		setState(pers.age++);
	};

	return (
		<div>
			<h1>Departement</h1>
			<ul id="pers-list">
				{state.Pers.map((pers, index) => (
					<li key={'pers-' + index} className="pers-item">
						<div className="header">
							<p>
								{' '}
								<strong>admin</strong> {pers.admin ? '✅' : '⛔'}
							</p>
						</div>
						<div className="body">
							<p>
								{' '}
								<strong>id </strong>
								{pers.id}
							</p>
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
								onClick={() => handleClick(pers)}
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
