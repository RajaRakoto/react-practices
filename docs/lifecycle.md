<!-- TODO: verified -->

### 🔵 Life cycle

Nous pouvons déclarer des méthodes spéciales sur un composant à base de `classe` pour exécuter du code quand un composant est monté `componentDidMount()` et démonté ` componentWillUnmount()`

La méthode `componentDidMount()` est exécutée après que la sortie du composant a été injectée dans le DOM. C’est un bon endroit pour mettre en place le minuteur de l'horloge

```jsx
 componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(), // appel de la fonction tick()
      1000 // tout les secondes
    );
  }
```

Nous allons détruire le minuteur dans la méthode de cycle de vie `componentWillUnmount()`

```jsx
 componentWillUnmount() {
    clearInterval(this.timerID);
  }
```

Implementation de la méthode `tick()` que le composant Clock va exécuter toutes les secondes par `setInterval()`

```jsx
 tick() {
    this.setState({
      date: new Date()
    });
  }
```

**=> Maintenant l’horloge se met à jour toutes les secondes.**
