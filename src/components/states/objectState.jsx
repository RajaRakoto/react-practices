import React from 'react';

/**
 * @description - une maniere plus propre de modifier un state de type objet
 */
export default function ObjectState() {
	const [object, setObject] = React.useState({
		name: 'Rakoto',
		click: 0,
	});

	const handleClick = () => {
		setObject({ ...object, click: object.click + 1 });
	};

	const handleChange = inputValue => {
		setObject({ ...object, name: inputValue });
	};

	return (
		<div>
			<span>Name: {object.name}</span>
			<br />
			<span>Click: {object.click}</span> <br /> <br />
			<button onClick={handleClick}>Set click</button>
			<br />
			<label htmlFor="name">Set name:</label>
			<input
				type="text"
				id="name"
				onChange={e => handleChange(e.target.value)}
			/>
		</div>
	);
}
