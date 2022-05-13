import React from 'react';

const Context = React.createContext('Default Value');

export default function Parent() {
	const value = 'My Context Value';

	return (
		<Context.Provider value={value}>
			<Child />
		</Context.Provider>
	);
}

function Child() {
	const value = React.useContext(Context);

	return <span>{value}</span>;
}
