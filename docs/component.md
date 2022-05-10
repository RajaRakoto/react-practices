<!-- TODO: verified -->

### 🔵 Component

Les `composants` vous permettent de découper l’interface utilisateur en éléments indépendants et réutilisables, vous permettant ainsi de considérer chaque élément de manière isolée.

L’approche technique de React est de créer du code modulaire, à base de composants réutilisables.

En effet, un composant React fonctionnel est tout simplement une fonction/class qui va retourner un bloc de code JSX. Cette manière de créer un composant est la plus efficace et la plus simple.

<div align="center">
Illustration de la repatition des composants React ...
<br>
<img src="https://github.com/RajaRakoto/github-docs/blob/master/react-practices/component-example.png?raw=true" width=600>
</div>

> **NOTE**: Conceptuellement, les composants sont comme des fonctions JavaScript. Ils acceptent des entrées quelconques (appelées « props ») et renvoient des éléments React décrivant ce qui doit apparaître à l’écran.

#### `📌 Function`

Creation d'un component a base d'une fonction

```jsx
// fonction classic
export default function myComponent() {
  return
  (
    // code JSX ...
  )
}

// arrow function ES6
const myComponent = () => (// code JSX ...)
```

#### `📌 Class`

Creation d'un component a base de class

```jsx
export default class MyComponent extends React.Component {
	render() {
		return (
      // code JSX ...
		);
	}
}
```

#### `📌 Style`

Ajout d'un style CSS pour un component

```jsx
import './jungle-house.css';
// code JSX ...
```

Les éléments React acceptent également l'attribut `style` pour styliser un composant - cette methode est recommandE si on veut avoir un changement dynamique du style d'un composant

```jsx
// ici l'attribut style est representE sous forme d'objet JSX
<div
	style={{
		color: age > 18 ? 'green' : 'orangered', // mettre une condition sur le style
		textAlign: right, // on uutilise camelCase au lieu d'un tiret '-'
		padding: 10, // on ne precise pas l'unitE 'px', JSX le detecte automatiquement
	}}
>
	// content ...
</div>
```

#### `📌 ReactDOM`

Dans le fichier `index.js`, l’id `root` permet de préciser où notre app React va vivre dans notre HTML. Ensuite, on va ordonner à ReactDOM de générer (render) notre composant React qui s’appelle `MyComponent`.

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyComponent />);
```

#### `📌 Fragment`

Deux/plusieurs composants doivent toujours être wrappés dans un seul composant parent - React met également à notre disposition un outil, les `Fragments`, si on veut wrapper deux/plusieurs composants dans un seul parent sans que le parent apparaisse dans le DOM

```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.Fragment>
		<FirstComponent />
		<SecondComponent />
	</React.Fragment>,
);
```

<br>

### `Les 7 regles d'Or d'un composant React`

> - Deux/plusieurs composants doivent toujours être wrappés dans un seul composant parent - soit en utilisant `<Fragment>` de react, soit en utilisant la balise `<div>`
> - Les noms des composants commencent par une majuscule, sinon React ne saura pas qu'il s'agit d'un composant, et pensera qu'il s'agit juste d'une balise HTML
> - Les balises des composants doivent être refermées.
> - Si vous intégrez React à une application existante, vous pouvez commencer tout en bas par un petit composant comme Button et remonter progressivement la hiérarchie des vues.
> - Les composants peuvent faire référence à d’autres composants dans leur sortie. Ça nous permet d’utiliser la même abstraction de composants pour n’importe quel niveau de détail. Un bouton, un formulaire, une boîte de dialogue, un écran : dans React, ils sont généralement tous exprimés par des composants.
> - Des nombreuses imbrications au sein du composant le rendent difficile à maintenir, et nous empêchent d’en réutiliser des parties individuelles, n’ayez pas peur de scinder des composants en composants plus petits.<br>
> - Tout composant React doit agir comme une fonction/class pure (Les fonctions sont dites « pures » parce qu’elles ne tentent pas de modifier leurs entrées et retournent toujours le même résultat pour les mêmes entrées) vis-à-vis de ses props.
