<!-- TODO: verified -->

### 🔵 Props

Un `props` est un/plusieurs parametre(s)/argument(s) qu on va passer sur un component (de la meme maniere qu un attribut en HTML, ou un parametre pour une fonction)

**Pour les props, vous devez garder trois règles à l'esprit:**

- Une prop est toujours passée par un composant parent à son enfant : c’est le seul moyen normal de transmission.
- Une prop est considérée en lecture seule dans le composant qui la reçoit.
- Il existe deux syntaxes pour assigner une valeur à une prop -> les `guillemet` pour les string, les `accolades` pour tout le reste: nombres, expressions JavaScript, booléen, etc ...
- Nommer les props du point de vue du composant plutôt que de celui du contexte dans lequel il est utilisé (un nom plus générique).

#### `📌 Utilisation basique d'un props`

```jsx
function Students(props) {
	const { name } = props;

	return <p>Mon nom est : {name}</p>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Students name="Rakoto" />);
```

#### `📌 Utilisation de plusieurs props par déstructuration`

> **RAPPEL**: La déstructuration est une syntaxe permettant de déclarer une variable en l'affectant directement à la valeur d'un objet (ou tableau).

```jsx
function Students(props) {
	const { name, age, email } = props; //destructuring (props.name | props.age | props.email)
	return (
		<div>
			<p>Nom: {name}</p>
			<p>Age: {age}</p>
			<p>Email: {email}</p>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Students name="Rakoto" age={25} email="rakoto@gmail.com" />);
```

#### `📌 children`

`Children` agis de la meme maniere que props sur un component mais ce dernier va passer un element fils au lieu d'un argument comme props.

> **NOTE**: Cette manière d'utiliser children est particulièrement utile lorsqu'un composant ne connaît pas ses enfants à l'avance, par exemple pour une barre de navigation (Sidebar) ou bien pour une modale.

```jsx
function Parent({ children }) {
	return (
		<React.Fragment>
			<p>{children}</p>
		</React.Fragment>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Parent>Je suis un element fils</Parent>);
```

> **TIPS**: React a créé les `PropTypes`, qui nous permettent de préciser dès le début le type d'une prop, si elle est requise, et de lui attribuer une valeur par défaut.
