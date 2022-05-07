import React from 'react';
/* datas */
import { Pers } from '../../data/pers';
/* styles */
import './departement.min.css';

function Stacks(props) {
	const { pers } = props;

	const checkStackStyle = stack => {
		switch (stack) {
			case 'PHP':
				return 'rgba(30, 143, 255, 0.466)';
			case 'Symfony':
				return 'rgba(20, 20, 20, 0.562)';
			case 'Laravel':
				return 'rgba(255, 102, 0, 0.555)';
			case 'MySQL':
				return 'rgba(195, 0, 255, 0.5)';
			case 'Flutter':
				return ' rgba(0, 162, 255, 0.5)';
			case 'Docker':
				return 'rgba(0, 225, 255, 0.637)';
			default:
				return 'rgba(238, 238, 238, 0.247)'; // default style
		}
	};

	return (
		<p>
			{' '}
			<strong>stacks:</strong>{' '}
			{pers.stacks.map(stack => (
				<span
					className="stack-item"
					style={{ backgroundColor: checkStackStyle(stack) }}
				>
					{stack}
				</span>
			))}
		</p>
	);
}

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
