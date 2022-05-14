/**
 * @description - cette fonction permet de supprimer une class d'animation apres un certain valeur de temps exprimE en seconde
 * @usage - utiliser le state "animationFlag" pour manipuler la class d'animation
 * @require - const [animationFlag, setAnimationFlag] = React.useState(true);
 * @param {setAnimationFlag} flagSetter - le modificateur pour animationFlag (boolean)
 * @param {*} delay - le delai avant que la class d'animation s'efface de la DOM
 */
export function animationCleaner(flagSetter, delay) {
	let seconds = delay;

	const counterID = setInterval(() => {
		countdown();
	}, 1000);

	const countdown = () => {
		if (seconds !== 0) {
			seconds--;
		} else {
			flagSetter(false);
			clearInterval(counterID);
		}
	};
}
