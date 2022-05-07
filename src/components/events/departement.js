import React from 'react';
/* style */
import './departement.min.css';

function Stacks(props) {
	const { user } = props;

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
			{user.stacks.map(stack => (
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
			Users: [
				{
					id: 'u1545',
					pseudo: 'Rasoa',
					age: 20,
					email: 'rasoa@protonmail.com',
					stacks: ['Ansible', 'AWS', 'Docker'],
					admin: true,
				},

				{
					id: 'u2006',
					pseudo: 'Rabe',
					age: 30,
					email: 'rabe@yahoo.fr',
					stacks: ['PHP', 'Symfony', 'Laravel', 'MySQL'],
					admin: false,
				},

				{
					id: 'u4587',
					pseudo: 'Randria',
					age: 27,
					email: 'randria@gmail.com',
					stacks: ['Flutter', 'Dart'],
					admin: false,
				},
			],
		};
	}

	render() {
		return (
			<div>
				<h1>Departement</h1>
				<ul id="user-list">
					{this.state.Users.map(user => (
						<li key={user.id.toString()} className="user-item">
							<p>
								{' '}
								<strong>pseudo: </strong>
								{user.pseudo}
							</p>
							<p>
								{' '}
								<strong>age:</strong> {user.age}
							</p>
							<p>
								{' '}
								<strong>email:</strong> {user.email}
							</p>
							<Stacks user={user} />
							<p>
								{' '}
								<strong>admin:</strong> {user.admin ? '✅' : '⛔'}
							</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
