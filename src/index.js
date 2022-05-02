import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
/* styles */
import './index.min.css';
/* components */
import Jungle from './components/jungle-house/jungle';

ReactDOM.render(
	<Fragment>
		<Jungle />
	</Fragment>,
	document.getElementById('root'),
);
reportWebVitals();
