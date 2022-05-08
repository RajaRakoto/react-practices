import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

/* styles */
import './index.min.css';

/* components */
// import Jungle from './components/apps/jungle-house/jungle';
// import Clock from './components/lifecycle/clock';
// import Departement from './components/events/departement/departement';
// import Age from './components/events/age/age';
import SampleForm from './components/events/form/sampleForm';

/* tests */
// import Test from './tests/labs';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.Fragment>
		{/* <Jungle /> */}
		{/* <Clock /> */}
		{/* <Departement /> */}
		{/* <Age /> */}
		<SampleForm />
	</React.Fragment>,
);

reportWebVitals();
