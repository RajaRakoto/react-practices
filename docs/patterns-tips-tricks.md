<!-- TODO: work -->

### `🔵 PATTERNS - TIPS - TRICKS`

#### `📌 useId()`

React 18 vient de sortir un nouveau hook `useId` sympa !

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

#### `📌 JSX Conditionals`

⛔ A la place de `?` dans une condition ternaire

```jsx
const sampleComponent = () => {
	return isTrue ? <p>True!</p> : null;
};
```

✅ Utilisez le `&&` pour omettre `: null`

```jsx
const sampleComponent = () => {
	return isTrue && <p>True!</p>;
};
```

<hr>

⛔ Pour les scénarios complexes avec trop de ternaires

```jsx
const sampleComponent = () => {
	return (
		<div>
			{flag && flag2 && !flag3 ? (
				flag4 ? (
					<p>Blah</p>
				) : flag5 ? (
					<p>Meh</p>
				) : (
					<p>Herp</p>
				)
			) : (
				<p>Derp</p>
			)}
		</div>
	);
};
```

✅ Utilisez l'expression de proposition `do` d' ECMAscript

```jsx
const sampleComponent = () => {
  return (
    <div>
      {
        do => {
          if (flag && flag2 && !flag3) {
            if (flag4) {
              <p>Blah</p>
            } else if (flag5) {
              <p>Meh</p>
            } else {
              <p>Herp</p>
            }
          } else {
            <p>Derp</p>
          }
        }
      }
    </div>
  )
};
```

#### `📌 State patterns`

Un état (ou state dans la langue de Shakespeare) est un ensemble de variables qui définit un composant à un instant T. En React, le changement d’un state résulte automatiquement par le re-render du composant où a été déclaré l’état.

Maintenant que nous avons rappelé les bases, regardons maintenant ce qui est bien et ce qui ne l’est pas.

📍 **TU NE MUTERAS POINT TON ÉTAT**

La règle d'immutabilité (caractère de ce qui ne peut changer) d'un etat React est souvent oubliée par la plupart des développeurs, ce qui mène alors leurs projets vers les pires bugs imaginables.

Mais un état n'est pas vraiment immuable lui-même. Vous pouvez les modifier **mais pas directement**. `La bonne pratique est de créer un nouvel objet correspondant à votre prochain état`. Qui dit nouvel objet dit nouvelle référence, et la différence de ref entre les états A et B est plus facile à comparer que toutes les propriétés une par une.

⛔ Erroné

```jsx
const UnComposant = () => {
	const [object, setObject] = useState({
		name: 'MacGuffin',
		click: 0,
	});

	const handleClick = () => {
		object.click = object.click + 1;
		setObject(object);
	};

	return <div onClick={handleClick}>{object.click}</div>;
};
```

✅ Correct

Ici on crée un nouvel objet grâce à la syntaxe ES2018, avant de l’envoyer au setObject.

```jsx
const UnComposant = () => {
	const [object, setObject] = useState({
		name: 'MacGuffin',
		click: 0,
	});

	const handleClick = () => {
		setObject({ ...object, click: object.click + 1 });
	};

	return <div onClick={handleClick}>{object.click}</div>;
};
```

📍 **TU CHANGERAS TON ÉTAT**

Oui, c'est un peu contraductoire par rapport a ce qui etait mentionnE ci-dessous mais **un état est par définition voué à évoluer**. Donc si votre but est d’avoir des informations qui ne changent pas dans le temps alors utilisez plutôt des constants. C’est plus léger et facile à comprendre.

⛔ Erroné

```jsx
const UnComposant = () => {
	const [valeur, setValeur] = useState('Valeur qui ne changera pas');

	return <div>{valeur}</div>;
};
```

✅ Correct

```jsx
const UnComposant = () => {
	const valeur = 'Valeur qui ne changera pas';

	return <div>{valeur}</div>;
};
```

<!-- 📍 **TU NE CHANGERAS QU’UN ÉTAT À LA FOIS** -->
