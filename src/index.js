import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

/* styles */
import './index.min.css';

/* apps */
// import Jungle from './components/apps/jungle-house/jungle';

/* contexts */
// import Parent from './components/contexts/basicContext';
// import UserApp from './components/contexts/updateContext';

/* events */
// import Departement from './components/events/departement/departement';
// import Forms from './components/events/form/forms';

/* lifecycles */
// import Clock from './components/lifecycle/clock';

/* refs */
// import Ref from './components/refs/counterRef';

/* states */
import ObjectState from './components/states/objectState';

/* tests */
// import Parent from './tests/labs';

// ===============================================

const root = ReactDOM.createRoot(document.getElementById('root'));

// TODO: indexed component menu (router) [*]
root.render(
	<React.Fragment>
		{/* <Jungle /> */}

		{/* <Parent /> */}
		{/* <UserApp /> */}

		{/* <Departement /> */}
		{/* <Forms /> */}

		{/* <Clock /> */}

		{/* <Ref /> */}

		<ObjectState />

		{/* <Parent /> */}
	</React.Fragment>,
);

reportWebVitals();
