import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
/* styles */
import './index.min.css';
/* components */
import JungleHome from './components/oc/jungle-house/jungle-home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Fragment>
		<JungleHome />
	</Fragment>,
);
reportWebVitals();
