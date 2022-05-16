<!-- TODO: verified -->

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

```

```
