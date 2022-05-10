<!-- TODO: verified -->

<div align="center">
Roadmap complet de React ...
<br>
<img src="https://github.com/RajaRakoto/github-docs/blob/master/react-practices/react-roadmap.png?raw=true" width=700>
</div>

### `🔵 CRA initialization`

- Commande de base pour generer une application React `my-app` en utilisant CRA:

```bash
npx create-react-app my-app
```

- Pour lancer le serveur local:

```bash
npm start
```

- Version

Dans certaines versions de React, certaines modifications ont été apportées, je mets ici quelques notes à leur sujet ...

**`18.0.0`**

```jsx
// index.js
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

**`17.0.2`**

```jsx
// index.js
import ReactDOM from 'react-dom';

ReactDOM.render(
		<App />
	document.getElementById('root'),
);
```

<hr>

<!-- TODO: verified -->

### `🔵 Modele de structure pour une application React`

#### `📌 Global`

```bash
 📂backups #contient les fichiers de sauvegarde de votre application
 📂 node_modules # toutes les dépendances
 📂 public # contient les fichiers relatifs au référencement web de votre page
 ├── 📄 index.html # il s'agit du template de votre app. Il y a plein de lignes de code, mais vous remarquez <div id="root"></div> comme 'entry point' des composants React
 └── 📄 manifest.json # utile pour creer une PWA (progressive web app)
 📂 src # le coeur de votre app React
 ├──📂assets # contient les images, fonts ...
 ├──📂components # contient tous les components et sous components (.css | .scss | .js | .ts)
 ├──📂dist # contient les fichiers dist
 ├──📂libs # contient les bibliotheques tiers (optionel)
 ├── 📄 index.css # le style global reliE a index.js
 └── 📄 index.js # le composant principal, ce fichier va charger tout les dependances (react, react-dom, css, component, serviceWorker) necessaire au fonctionnement d'un app react
```

> **ATTENTION**: `reportWebVitals.js` a ne pas supprimer

#### `📌 JSON`

```json
  "dependencies": {
    "react": "^17.0.2", // version du react
    "react-dom": "^17.0.2", // dep. permettant a react d'interagir avec le DOM
    "react-scripts": "5.0.0", // dep. pour utiliser les scipts react
  },

  "scripts": {
    "start": "react-scripts start", // permet de lancer un serveur local
    "build": "react-scripts build", // pour build une app react en version prod
    "test": "react-scripts test", // pour faire des tests sur une app react
  },
```
