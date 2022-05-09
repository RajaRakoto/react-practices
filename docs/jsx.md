<!-- TODO: verified -->

### `🔵 JSX`

`JSX` est une extension React de la syntaxe du langage JavaScript qui permet de structurer le rendu des composants à l'aide d'une syntaxe familière à de nombreux développeurs. Il est similaire en apparence au HTML.

**Quelques notion a savoir a propos de JSX**:

- En React, les accolades `{` et `}` sont particulièrement utiles. Dès qu'il s'agit d'expressions JavaScript, elles sont écrites entre accolades.
- Vous ne pouvez pas declarer une `variable` dans les accolades de JSX
- Ne mettez pas de guillemets autour des accolades quand vous utilisez une expression JavaScript dans un `attribut`. Vous pouvez utiliser soit des `guillemets` (pour des valeurs textuelles) soit des `accolades` (pour des expressions), mais pas les deux à la fois pour un même attribut.
- Dans la mesure où JSX est plus proche de JavaScript que de HTML, React DOM utilise la casse camelCase comme convention de nommage des propriétés, au lieu des noms d’attributs HTML (Par exemple, `class` devient `className` en JSX, et `tabindex` devient `tabIndex`.)

```jsx
// variable
const name = 'Raja';
const welcome = <h1>Bonjour, {name}</h1>;
const avatar = <img src={user.avatarUrl} />;

// condition
<div>
	{2 > 0 ? 'Deux est plus grand que zéro' : "Ceci n'apparaîtra jamais"}
</div>;

// object
const user = {
	firstName: 'Kylian',
	lastName: 'Mbappé',
};

// function
function formatName(user) {
	return user.firstName + ' ' + user.lastName.toUpperCase();
}

const element = <h1>Bonjour, {formatName(user)} !</h1>;
```

[Pour en savoir plus sur JSX](https://fr.reactjs.org/docs/introducing-jsx.html) <br>
