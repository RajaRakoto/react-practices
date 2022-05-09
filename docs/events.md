<!-- TODO: working -->

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

export default function Departement() {
	state = { Users }; // get Users object

	setAge = () => {
		const Users = { ...state.Users }; // copie de l'objet du state (destructuring)
		Users.user1.age += 1; // incrementation
		setState({ Users }); // mise a jour du state
	};

	const { Users } = state; // recuperer le state actuel
	return (
		<React.Fragment>
			<p>Age (user1): {Users.user1.age}</p>
			<button onClick={setAge}>Viellir</button>
		</React.Fragment>
	);
}
```

Passer un argument `age` pour la fonction `setAge()`

> **NOTE**: React passe par défaut un `objet` en paramètre aux fonctions indiquées en callback des événements. Ici `age` n'est pas un objet, pour que React considere ce dernier comme un nombre. On utilise une fonction anonyme `() =>` pour appeller `setAge(age)`

```jsx
export default function Departement() {
	state = { Users };

	setAge = age => {
		const Users = { ...state.Users };
		Users.user1.age += age;
		this.setState({ Users });
	};

	const { Users } = state;
	return (
		<React.Fragment>
			<p>Age (user1): {Users.user1.age}</p>
			<button onClick={() => setAge(2)}>vieillir</button>
		</React.Fragment>
	);
}
```

#### `📌 onChange`

```jsx
export default function Departement() {
	state = { Users }; // get Users object
	Users = { ...state.Users }; // copie de l'objet du state (destructuring)

	setName = e => {
		// event represente l evenement attachE a l'element input
		const name = e.target.value; // recuperer la valeur en input
		Users.user1.pseudo = name; // modifier le state
		this.setState({ Users }); // mettre a jour le state
	};

	const { Users } = state;
	return (
		<React.Fragment>
			<input
				value={Users.user1.pseudo} // valeur de l'input
				onChange={setName} // ecouteur d'evenement qui fait appel a la methode setName a chaque modification
				type="text"
			></input>
			<p>Pseudo (user1): {Users.user1.pseudo}</p>
		</React.Fragment>
	);
}
```
