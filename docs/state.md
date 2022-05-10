<!-- TODO: working -->

### 🔵 State

Le `state` (etat local) nous permet de garder des informations. Ces informations sont spécifiques à un composant et elles proviennent d'une interaction que l'utilisateur a eu avec le composant. Un composant a donc besoin d’un state lorsque des données qui lui sont associées évoluent dans le temps.

**Les principaux differences entre state et props**:

- L’état local est similaire aux props, mais il est `privé` et complètement contrôlé (en interne) par le composant.

- Un composant ne peut pas changer ses `props`, mais il peut changer son `state`.

> **TIPS**: N’essayez pas de synchroniser les états de plusieurs composants. Préférez le faire remonter dans leur plus proche ancêtre commun, et faire redescendre l’info via les props aux composants concernés.

### ◾ State pour les composant a base d'un class

#### `📌 Utilisation basique d'un state`

Prenons comme exemple un horloge (pour l'instant cette horloge est statique puisque qu'on n'a pas encore implementE un miniteur pour le mettre a jour a chaque seconde) - le fichier `lifecycle.md` montre comment ajouter un miniteur a ce dernier

```jsx
class Clock extends React.Component {
	// les composants à base de classe devraient toujours appeler le constructeur de base avec props.
	constructor(props) {
		super(props);
		this.state = { date: new Date() }; // initialisation de state en ajoutant l'objet date
	}

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
			</div>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clock />);
```

#### `📌 Passage d'un state vers un autre composant via un props`

```jsx
// le composant enfant
function FormattedDate(props) {
	return <h2>Il est {props.date.toLocaleTimeString()}.</h2>;
}

// l'appel de "FormattedDate" ce fait dans son composant parent (a base d'un class)
<FormattedDate date={this.state.date} />;
```

#### `📌 setState()`

`setState()` permet de planifier une mise à jour de l'état local d'un composant a base d'un class.

> **NOTE**: le seul endroit ou vous pouvez affecter directement `this.state`, c'est dans le `constructeur`

Exemple de mise a jour 1:

```jsx
// erroné
this.state.comment = 'Bonjour';

// correct
this.setState({ comment: 'Bonjour' });
```

Exemple de mise a jour 2:

```jsx
// erroné
this.setState({
	counter: this.state.counter + this.props.increment,
});

// correct - cette fonction fléchée recevra l’état précédent comme premier argument et les props au moment de la mise à jour comme second argument
this.setState((state, props) => ({
	counter: state.counter + props.increment,
}));
```

Exemple de mise a jour 3:

```jsx
constructor(props) {
    super(props);
		// un état peut contenir plusieurs variables indépendantes
    this.state = {
      posts: [],
      comments: []
    };

		// mise a jour independant avec des appels separEes de setState()
	 componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }
  }
```

### ◾ State pour les composant a base d'une fonction

#### `📌 useState()`

`useState()` est un Hook qui permet d'ajouter l'état local React à des composants a base d'une fonction.

Syntax de base:

```jsx
const [state, setState] = useState(initialState);
```

- Renvoie une valeur d’état local et une fonction pour la mettre à jour.

- Pendant le rendu initial, l’état local `state` a la même valeur que celle passée en premier argument `initialState` de useState().

- La fonction `setState` permet de mettre à jour l’état local. Elle accepte une nouvelle valeur d’état local et planifie un nouveau rendu du composant.

Exemple:

```jsx
const [cart, updateCart] = useState(0);
```

**`useState()`** nous renvoie une paire de valeurs dans un `tableau de 2 éléments`, que nous récupérons dans les variables `cart` et `updateCart` dans notre exemple. Le premier élément est la valeur actuelle, et le deuxième est une fonction qui permet de la modifier.

**Comprenez les crochets**

Tout d'abord, `les crochets "[]"` . Si cette syntaxe peut vous paraître un peu particulière, ça s'appelle la `décomposition`, parce qu'il s'agit d'un tableau et non d'un objet (destructuration).

Sans la décomposition, nous aurions aussi pu faire :

```jsx
const cartState = useState(0);
const cart = cartState[0];
const updateCart = cartState[1];
```

**Initialisez votre state**

L'argument passer a `useState()` correspond à `l'état initial de notre state`. Cet état initial peut être un nombre comme ici, une string, un booléen, un tableau ou encore un objet avec plusieurs propriétés.

> **ATTENTION**: Il est important de **préciser une valeur initiale dans votre state**. Sinon, elle sera `undefined` par défaut, et ce n'est pas un comportement souhaitable : plus vous serez explicite, mieux votre application s'en portera !

> **NOTE**: Vous pouvez egalement creer plusieurs variables d'etat (state) pour un component
