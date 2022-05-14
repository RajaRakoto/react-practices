import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

/* styles */
import './index.min.css';

/* apps */
import Jungle from './components/apps/jungle-house/jungle';

/* lifecycles */
// import Clock from './components/lifecycle/clock';

/* events */
// import Departement from './components/events/departement/departement';
// import Forms from './components/events/form/forms';

/* contexts */
// import Parent from './components/contexts/basicContext';
// import UserApp from './components/contexts/updateContext';

/* refs */
// import Ref from './components/refs/counterRef';

/* tests */
// import Parent from './tests/labs';

// ===============================================

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
		{/* <Ref /> */}

		{/* <Parent /> */}
	</React.Fragment>,
);

reportWebVitals();
