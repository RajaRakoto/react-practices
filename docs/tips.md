### `🔵 TIPS`

#### `📌 useId()`

React 18 vient de sortir il y a quelques jours, et il apporte un nouveau hook `useId` sympa !

C'est un moyen simple de garantir un identifiant unique lorsque vous en avez besoin - soit pour générer des identifiants dans le cadre de vos données, soit en l'utilisant comme clé lors d'une itération sur un tableau.

```jsx
import { useId } from 'react';

export default function App() {
	const Users = [
		{
			id: useId(),
			name: 'Rakoto',
		},
		{
			id: useId(),
			name: 'Rasoa',
		},
	];

	return (
		<div className="app">
			{Users.map(user => (
				<p key={user.id}>{user.name}</p>
			))}
		</div>
	);
}
```
