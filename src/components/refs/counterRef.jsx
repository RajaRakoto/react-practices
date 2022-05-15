import React from 'react';

/**
 * @description - stocker une valeur modifiable (count) qui ne provoque pas de nouveau rendu lors de la mise à jour.
 * @feat - useState() | useRef() | useEffect()
 */
export default function Ref() {
	const [inputValue, setInputValue] = React.useState('');
	let countWithRef = React.useRef(0); // arg: valeur initiale de countWithRef
	let countWithoutRef = 0;

	React.useEffect(() => {
		countWithRef.current = countWithRef.current + 1; // mise a jour du countWithRef qui ne provoque pas du re-render (sa valeur sera toujours stockE et incrementE)
		countWithoutRef = countWithoutRef + 1; // toujours zero
	});

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
			<h3>Render Count (with ref): {countWithRef.current}</h3>
			<h3>Render Count (without ref): {countWithoutRef}</h3>
		</div>
	);
}
