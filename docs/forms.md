<!-- TODO: verified -->

#### `📌 Formulaires contrôlés en React`

Les formulaires contrôlés permet d'interagir directement avec la donnée renseignée par l'utilisateur. Vous pouvez donc afficher un message d'erreur si la donnée n'est pas valide, ou bien la filtrer en interceptant une mauvaise valeur.

```jsx
import { useState } from 'react';

export default function QuestionForm() {
	/*
	- inputValue: correspond au state du component QuestionForm
	- setInputValue: la fonction correspondante pour modifier le state | c'est le setState()
  - useState: permettant la mise a jour du state et le rendu
	*/

	const [inputValue, setInputValue] = useState('Posez votre question ici'); // definiser la valeur initiale du state par l'argument de useState()

	// fonction intermediaire permettant de verifier la valeur de inputValue
	function checkInputValue(value) {
		const isInputError = value.includes('r'); // interdire le caractere "r"

		isInputError ? (
			<p>Vous n'avez pas le droit d'utiliser le caractere "r" ici !</p>
		) : (
			setInputValue(value)
		);
	}

	return (
		<div>
			<textarea
				value={inputValue} // se mettre a jour a chaque appel de la fonction setInputValue()
				onChange={e => checkInputValue(e.target.value)} // modification & verification du state "inputValue" par la fonction checkInputValue() en prenant comme argument la valeur actuelle du textarea
			/>
		</div>
	);
}
```
