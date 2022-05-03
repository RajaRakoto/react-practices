import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
/* styles */
import './index.min.css';
/* components */
import Jungle from './components/jungle-house/jungle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Fragment>
		<Jungle />
	</Fragment>,
);

reportWebVitals();
