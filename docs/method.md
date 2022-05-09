<!-- TODO: verified -->

### 🔵 Methode utiles en React

#### `📌 includes()`

`includes()` permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas.

```jsx
const array1 = [1, 2, 3];
console.log(array1.includes(2)); // true

const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat')); // true
console.log(pets.includes('at')); // false
```

#### `📌 map()`

`map()` est une methode javascript qui passe sur chaque élément d'un tableau/objet. Elle lui applique une fonction, et renvoie un nouveau tableau/objet contenant les résultats de cette fonction appliquée sur chaque élément. En React, elle va nous permettre de prendre une liste de données, et de la transformer en liste de composants.

```jsx
// une fonction qui doublerait la valeur d'un élément, cela donne :
const numbers = [1, 2, 3, 4];
const doubles = numbers.map(x => x * 2); // [2, 4, 6, 8]
```

```jsx
export default function PlantCondition(props) {
	const { conditionType, conditionValue } = props;
	const range = [1, 2, 3];

	return (
		<div>
			{range.map(rangeElem =>
				conditionValue >= rangeElem ? (
					<span key={rangeElem.toString()}>
						{conditionType === 'water' ? '💧' : '☀️'}
					</span>
				) : null,
			)}
		</div>
	);
}
```

> **TIPS**: Les `key` (clés) aident React à identifier quels éléments d’une liste ont changé, ont été ajoutés ou supprimés. Vous devez donner une clé à chaque élément dans un tableau, afin d’apporter aux éléments une identité stable - Elle doit être unique au sein du tableau et stable dans le temps - La méthode la plus simple et la plus fiable (pour avoir un key unique) consiste à utiliser l'id associée à votre donnée dans votre base de données OU définir une string et la combiner avec l'index de la data dans votre tableau. => `key` permet d'associer une donnée au composant correspondant dans le DOM virtuel qui permettra ensuite de générer les composants

```jsx
<ul>
	{plantList.map((plant, index) => (
		<li key={`${plant}-${index}`}>{plant}</li>
	))}
</ul>
```

<hr>
