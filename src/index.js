import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

/* styles */
import './index.min.css';

/* components */
import Jungle from './components/apps/jungle-house/jungle';
// import Clock from './components/lifecycle/clock';
// import Departement from './components/events/departement/departement';
// import Age from './components/events/age/age';
// import Forms from './components/events/form/forms';
// import Parent from './components/contexts/basicContext';
// import UserApp from './components/contexts/updateContext';

/* tests */
// import Parent from './tests/labs';

const root = ReactDOM.createRoot(document.getElementById('root'));

// TODO: indexed component menu (router) [*]
root.render(
	<React.Fragment>
		<Jungle />
		{/* <Clock /> */}
		{/* <Departement /> */}
		{/* <Age /> */}
		{/* <Forms /> */}
		{/* <UserApp /> */}

		{/* <Parent /> */}
	</React.Fragment>,
);

reportWebVitals();
