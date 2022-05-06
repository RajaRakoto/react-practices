import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
/* styles */
import './index.min.css';
/* components */
import Jungle from './components/jungle-house/jungle';
// import Clock from './components/clock/clock';
/* tests */
// import Test from './tests/labs';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.Fragment>
		<Jungle />
		{/* <Clock /> */}
	</React.Fragment>,
);

reportWebVitals();
