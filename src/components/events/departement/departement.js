import React from 'react';
/* datas */
import { Pers } from '../../../data/pers';
/* styles */
import './departement.min.css';
/* components */
import Stacks from './_stacks';

export default class Departement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Pers: Pers,
		};
	}

	render() {
		return (
			<div>
				<h1>Departement</h1>
				<ul id="pers-list">
					{this.state.Pers.map(pers => (
						<li key={pers.id.toString()} className="pers-item">
							<p>
								{' '}
								<strong>pseudo: </strong>
								{pers.pseudo}
							</p>
							<p>
								{' '}
								<strong>age:</strong> {pers.age}
							</p>
							<p>
								{' '}
								<strong>email:</strong> {pers.email}
							</p>
							<Stacks pers={pers} />
							<p>
								{' '}
								<strong>admin:</strong> {pers.admin ? '✅' : '⛔'}
							</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
