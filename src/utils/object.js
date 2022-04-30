/**
 * @description extraire un element particulier dans un tableau d'objet (ex: le prix d'un olivier)
 * @param {object} obj - tableau d'objet a filtrer
 * @param {string} id - identifiant de l'element de l'objet
 * @param {string} key - le mot cle a extraire (sa valeur)
 * @returns {*} la valeur de l'argument `key` de l'element portant l'identifiant `id` de l'objet `obj`
 * @example getObjectElementValue(plantList, '5pl', 'price');
 */
export const getObjectElementValue = (obj, id, key) => {
	const result = obj.filter(obj => obj.id === id);

	if (key === 'name') {
		return result[0].name;
	} else if (key === 'category') {
		return result[0].category;
	} else if (key === 'price') {
		return result[0].price;
	}
};

/**
 * @description extraire une liste de valeur unique dans un tableau d'objet (ex: les differentes type de categorie de plante)
 * @param {object} obj - tableau d'objet a filter
 * @param {string} key - le mot cle a extraire (liste de sa valeur unique)
 * @returns {array} la liste de la valeur unique contenant dans le tableau d'objet
 * @example getObjectElementType(plantList, 'category')
 */
export const getObjectElementType = (obj, key) => {
	if (key === 'category') {
		var result = obj.reduce(
			(acc, obj) =>
				acc.includes(obj.category) ? acc : acc.concat(obj.category),
			[],
		);
	} else if (key === 'name') {
		result = obj.reduce(
			(acc, obj) => (acc.includes(obj.name) ? acc : acc.concat(obj.name)),
			[],
		);
	} else if (key === 'id') {
		result = obj.reduce(
			(acc, obj) => (acc.includes(obj.id) ? acc : acc.concat(obj.id)),
			[],
		);
	} else if (key === 'price') {
		result = obj.reduce(
			(acc, obj) => (acc.includes(obj.price) ? acc : acc.concat(obj.price)),
			[],
		);
	}
	return result;
};
