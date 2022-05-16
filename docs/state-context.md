<!-- TODO: work -->

### 🔵 State

Le `state` (etat local) nous permet de garder des informations. Ces informations sont spécifiques à un composant et elles proviennent d'une interaction que l'utilisateur a eu avec le composant. Un composant a donc besoin d’un state lorsque des données qui lui sont associées évoluent dans le temps.

**Les principaux differences entre state et props**:

- L’état local est similaire aux props, mais il est `privé` et complètement contrôlé (en interne) par le composant.

- Un composant ne peut pas changer ses `props`, mais il peut changer son `state`.

> **TIPS**: N’essayez pas de synchroniser les états de plusieurs composants. Préférez le faire remonter dans leur plus proche ancêtre commun, et faire redescendre l’info via les props aux composants concernés.

<br>

### ◾ State pour les composant a base d'une fonction

#### `📌 useState()`

`useState()` est un Hook qui permet d'ajouter l'état local React à des composants a base d'une fonction.

Syntax de base:

```jsx
const [state, setState] = useState(initialStateValue);
```

- Renvoie une valeur d’état local et une fonction pour la mettre à jour.

- Pendant le rendu initial, l’état local `state` a la même valeur que celle passée en premier argument `initialStateValue` de useState().

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

#### `📌 Utilisation basique`

Prenons comme exemple un horloge (pour l'instant cette horloge est statique puisque qu'on n'a pas encore implementE un miniteur pour le mettre a jour a chaque seconde) - le fichier `lifecycle.md` montre comment ajouter un miniteur a ce dernier

```jsx
function Clock() {
	const [stateDate, setStateDate] = React.useState({ date: new Date() }); // def state

	return (
		<div>
			<h2>It' s {stateDate.toLocaleTimeString()}</h2>
		</div>
	);
}
```

#### `📌 modifier un state`

- **object**: la bonne pratique pour modifier un state de type objet grace a `setObject()`

```jsx
function ObjectState() {
	const [object, setObject] = React.useState({
		name: 'Rakoto',
		click: 0,
	});

	// ici on crée un nouvel objet grâce à la syntaxe ES2018, avant de l’envoyer au setObject.

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
```

#### `📌 previous state (concatenation de plusieurs etats)`

Toutes les operations effectuEs ci-dessous ne permet pas de concatener l'ancienne valeur d'un etat avec la nouvelle valeur. Voici une autre maniere plus propre de stocker/concatener vos etats

Exemple avec un state de type array:

```jsx
const [cartList, setCartList] = React.useState([]); // empty array

const sendDatatoCart = cartData => {
	setCartList(previousState => [...previousState, cartData]);
};
```

Exemple avec un state de type object:

```jsx
const [cartList, setCartList] = React.useState([]); // object container

const sendDatatoCart = (PlantName, PlantPrice) => {
	// temporary cartList object
	let updatedCartList = {
		PlantName: PlantName,
		PlantPrice: PlantPrice,
	};

	setCartList(previousState => [...previousState, updatedCartList]);
};
```

<br>

### ◾ Transmission des données (state) entre les composants React

### `📎 Transmission de données du parent à l'enfant`

#### `📌 1er methode (à l'aide d'un props)`

- On utilise `setState()` pour recuperer/modifier les donnees du composant `parent` (on peut l'associer avec un evenement React)
- On passe le `state` correspondant au composant `parent` comme un `props` pour le composant `enfant`
- Seul les `props` interagissent avec le composant `enfant`

```jsx
function Child({ parentData }) {
	return (
		<div>
			<span>Child data: {parentData}</span>
		</div>
	);
}

export default function Parent() {
	const [state, setState] = React.useState(null);

	const externalData = 'Ceci est un donnee venant du composant parent';

	return (
		<div>
			<p>Parent data: {state}</p>
			<Child parentData={state} />
			<br />
			<button onClick={() => setState(externalData)}>Send</button>
		</div>
	);
}
```

#### `📌 2e methode (à l'aide d'un callback)`

```jsx
function Child({ parentData }) {
	return <div>Child data: {parentData}</div>;
}

export default function Parent() {
	const [state, setstate] = React.useState(null);

	const externalData = 'Ceci est un donnee venant du composant parent';

	const sendDataToChild = externalData => {
		setstate(externalData);
	};

	return (
		<div>
			<p>Parent data: {state}</p>
			<Child parentData={state} />
			<br />
			<button onClick={() => sendDataToChild(externalData)}>Send</button>
		</div>
	);
}
```

> **NOTE**: Quelque soit la methode utilisE (props ou callback), les données du composant `parent` et composant `enfant` sont toujours `synchronisés`

#### `📎 Transmission de données de l'enfant au parent`

- Le composant `enfant` a comme props la fonction callback du composant `parent`
- Cette fonction effectue la modification de l'etat local (state) du composant `parent`
- On passe les donnees du composant `enfant`comme l'argument du callback
- Les données `enfant` écraseront les données parent lorsqu'on click sur `<button>`

> **ATTENTION**: le nom du props pour le composant `enfant` devrait toujours le meme que le nom de la fonction callback du composant `parent` pour permette son utilisation

```jsx
function Child({ sendDatatoParent }) {
	const externalData = 'Ceci est un donnee venant du composant enfant';

	return (
		<div>
			<span>Child data: {externalData}</span>
			<br />
			<button onClick={() => sendDatatoParent(externalData)}>Send</button>
		</div>
	);
}

export default function Parent() {
	const [state, setState] = React.useState(null);

	const sendDatatoParent = childData => {
		setState(childData);
	};

	return (
		<div>
			<p>Parent data: {state}</p>
			<Child sendDatatoParent={sendDatatoParent} />
		</div>
	);
}
```

#### `📎 Transmission de données entre enfants`

Il existe **2 methodes** pour effectuer le transfert de données entre les composants `enfants`

- **Méthode 1 :** Utilisez `Redux` (state managment) en maintenant les états de tous les composants enfants dont vous pourriez avoir besoin dans un magasin global et obtenez les données dudit magasin.

- **Méthode 2 :** Utilisez `React's Context API` de nombreux développeurs ont choisi l'API Context de React plutôt que Redux

#### `📌 useContext()`

L'idée principale de l'utilisation du `contexte` est de permettre à vos composants d'accéder à certaines données globales quelle que soit leur profondeur dans l'arborescence des composants et de les restituer lorsque ces données globales sont modifiées.

Vous pouvez maintenir à l'intérieur du contexte :

- état global
- thème
- configuration des applications
- nom d'utilisateur authentifié
- paramètres utilisateur
- langue préférée
- un ensemble de services
- etc ...

> **ATTENTION**:
>
> 1. Vous devez bien réfléchir avant de décider d'utiliser le contexte dans votre application puisque l'integration du contexte ajoute de la complexité.
> 2. L'ajout de contexte rend plus difficile le test unitaire des composants.

Maintenant, essayez d'imaginer la structure de répertoires de l'application comme suit : le composant `parent` restitue en fait les composants `enfants` dans l'application qui partage leurs donnees grace au `contexte` React.

```
App
 └── Parent
   ├── Child1
   └── Child2
```

L'utilisation du `contexte` React nécessite **3 étapes**:

1. Créer le contexte
2. Fournir le contexte
3. Consommer le contexte.

<div align="center">
Mode de fonctionnement du contexte React ...
<br>
<img src="https://github.com/RajaRakoto/github-docs/blob/master/react-practices/react-context.svg?raw=true" width=600>
</div>

#### `A. Créer le contexte`

- La fonction `createContexte()` cree une instance de contexte et accepte un argument optionnel comme `valeur par defaut`

```jsx
const Context = React.createContext('Default Value');
```

> **NOTE**: Vous pouvez creer plusieurs `contexte` autant que vous voulez pour vos composants

#### `B. Fournir le contexte`

- La methode `Provider` est disponible dans l'objet `Context` recément crée et est utilisé pour fournir le contexte à ses composants enfants, quelle que soit leur profondeur.

- Pour définir la valeur de context, utilisez la `value` prop comme suit:

```jsx
function MyProvider() {
	const contextValue = 'My Context Value';
	return (
		<Context.Provider value={contextValue}>
			<Child1 />
			<Child2 />
		</Context.Provider>
	);
}
```

> **IMPORTANT**: Tous les composants qui souhaitent (au plus tard) consommer le contexte doivent être **`encapsulés`** dans le `composant fournisseur` (MyProvider) et dans le `contexte correspondant` (Context.Provider).

- Si vous souhaitez modifier la valeur de contexte, mettez simplement à jour la value prop.

#### `C. Consommer le contexte`

- La consommation du contexte peut etre effectuée en utilisant `useContext(<context_object_name>)`

```jsx
function Child1() {
	const contextValue = React.useContext(Context); // recupere la valeur de contextValue contenant dans prop value
	return <span>{contextValue}</span>;
}
```

- Vous pouvez avoir autant de consommateurs que vous le souhaitez pour un même contexte. Si la valeur de contexte change (en changeant le value prop du provider `<Context.Provider value={value} />`, tous les consommateurs sont immédiatement notifiés et restitués.

- Si le consommateur n'est pas enveloppé dans le fournisseur, mais essaie toujours d'accéder à la valeur de contexte en utilisant `useContext(<context_object_name>)`, alors la valeur du contexte serait l'argument de **valeur par défaut** fourni à la fonction `createContext(defaultValue)`

#### `📌 Mise a jour du contexte`

`L'API React Context` est sans état par défaut et ne fournit pas de méthode dédiée pour mettre à jour la valeur de contexte à partir des composants consommateurs.

Mais cela peut être facilement mis en œuvre en intégrant un mécanisme de gestion d'état comme `useState()` ou `useReducer()` hooks et en fournissant une fonction de mise à jour directement dans le contexte à côté de la valeur elle-même:

- Le consommateur `<UserInput />` lit la valeur de contexte, d'où `setUserName` qui permet de mettre à jour la valeur de contexte.

- `<UserInfo />` est un autre consommateur du contexte. Lors du mise a jour du contexte effectuer par `<UserNameInput />`, ce composant est également mis à jour.

- Grace au Hook `useMemo()`, `<UserApp />` mémorise la valeur de contexte, empêchant le nouveau rendu des consommateurs à chaque fois que `<UserApp />` nouveau rendu.

> **NOTE**: Sans mémorisation, `const value = { userName, setUserName }` créerait différentes instances d'objet lors du nouveau rendu de `<UserApp />`, déclenchant le nouveau rendu dans les consommateurs de contexte.

```jsx
// first child component
function UserInput() {
	const { setUserName } = React.useContext(UserContext); // UserName setter for context

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

// parent component
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
```
