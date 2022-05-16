<!-- TODO: work -->

### 🔵 Events

La gestion des événements pour les éléments React est très similaire à celle des éléments du DOM. Il y a tout de même quelques différences de syntaxe.

**Quelques caractéristiques des événements en React**:

- Les événements de React sont nommés en `camelCase` plutôt qu’en minuscules.
- En JSX on passe (en entre accolades) une `fonction` comme gestionnaire d’événements plutôt qu’une chaîne de caractères.
- Contrairement au vanilla JS, dans la quasi totalité des cas, vous n'avez pas besoin d'utiliser `addEventListener`.
- Vous devez appeler explicitement `e.preventDefault()` our annuler le comportement par défaut d'un evenement

#### `📌 SyntheticEvent (e)`

Il s'agit de la même interface que pour les événements natifs du DOM, sauf qu'ils sont compatibles avec tous les navigateurs.

Si on recupere le paremetre d'un evenement en passant `e` comme argument d'un callback (fonction liEe a un evenement)

```jsx
function handleClick(e) {
	console.log(e); // obtention de l'information concernant l'evenement dans l'objet "SyntheticBaseEvent"
}
```

> **NOTE**: Vu qu'il s'agit de la même interface que pour les événements natifs du DOM, on a donc aussi accès à `preventDefault`, `stopPropagation` et beaucoup d'autre ...

[En savoir plus sur les événements synthétiques](https://fr.reactjs.org/docs/events.html)

#### `📌 onClick`

```jsx
// object
const Users = {
	user1: {
		pseudo: 'Rasoa',
		age: 20,
	},

	user2: {
		pseudo: 'Rabe',
		age: 30,
	},

	user3: {
		pseudo: 'Randria',
		age: 27,
	},
};

export default function Age() {
	let [state, setState] = React.useState();
	state = { Users };

	const setAge = value => {
		setState((state.Users.user1.age += value)); // mise a jour du state (age de user1)
	};

	return (
		<React.Fragment>
			<p>Age (user1): {Users.user1.age}</p>
			<button onClick={() => setAge(2)}>Viellir</button>
		</React.Fragment>
	);
}
```

#### `📌 onChange`

```jsx
export default function Message() {
	const [message, setMessageValue] = React.useState('default message');

	return (
		<React.Fragment>
			<textarea
				cols="30"
				rows="10"
				placeholder={message}
				onChange={e => setMessageValue(e.target.value)} // ecouteur d'evenement qui fait appel a la methode setMessageValue() a chaque modification et mettre a jour le state
			></textarea>
		</React.Fragment>
	);
}
```

#### `📌 onSubmit`

```jsx
export default function SampleForm() {
	const handleSubmit = e => {
		e.preventDefault();
		alert(e.target['sample-input'].value); // get sample-input value
	};

	return (
		<React.Fragment>
			<form id="sample-form" onSubmit={handleSubmit}>
				<h5>Sample form</h5>
				<input
					type="text"
					name="sample-input"
					placeholder="Entrer un texte ici ..."
				/>
				<ValidBtn />
			</form>
		</React.Fragment>
	);
}
```
