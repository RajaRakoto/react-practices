import React from 'react';
/* style */
import './onclick.min.css';

function Stacks(props) {
	const { user } = props;
	return (
		<p>
			{' '}
			<strong>stacks:</strong>{' '}
			{user.stacks.map(stack => (
				<span className="stack-item">{stack}</span>
			))}
		</p>
	);
}

export default class PublicInfo extends React.Component {
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

	// this.stacksLength

	render() {
		return (
			<div>
				<h1>Liste des utilisateurs</h1>
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
