import React from 'react';

// first child component
function UserInput() {
	const { setUserName } = React.useContext(UserContext); // UserName setter in context

	const handleChange = inputValue => {
		setUserName(inputValue);
	};

	return (
		<div>
			<label htmlFor="user-name">Username:</label>
			<input
				type="text"
				name="user-name"
				id="user-name"
				onChange={e => handleChange(e.target.value)}
			/>
			<br />
		</div>
	);
}

// second child component
function UserInfo() {
	const { userName } = React.useContext(UserContext);
	return <div>UserName value (in second child component): {userName}</div>;
}

// def context
const UserContext = React.createContext({
	userName: '',
	setUserName: () => {},
});

/**
 * @description - exemple de manipulation d'un contexte via un component enfant
 * @feat - useState() | useMemo() | context manip (encapsulation, update)
 */
export default function UserApp() {
	const [userName, setUserName] = React.useState('unknown'); // def state & default value
	const value = React.useMemo(() => ({ userName, setUserName }), [userName]); // memo

	return (
		<React.Fragment>
			<UserContext.Provider value={value}>
				<UserInput />
				<UserInfo />
			</UserContext.Provider>
			<span>UserName value (in parent component): {userName}</span>
		</React.Fragment>
	);
}
