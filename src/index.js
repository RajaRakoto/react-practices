import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

/* styles */
// import '@picocss/pico';
import './index.min.css';

/* apps */
// import Jungle from './components/apps/jungle-house/jungle';
// import TodoSample from './components/apps/todo/todo-sample/todo';

/* contexts */
// import Parent from './components/contexts/basicContext';
// import UserApp from './components/contexts/updateContext';

/* events */
// import Departement from './components/events/departement/departement';
// import Forms from './components/events/form/forms';

/* lifecycles */
// import ClockLifecycle from './components/lifecycle/clockLifecycle';

/* refs */
// import CounterRef from './components/refs/counterRef';

/* states */
// import ObjectState from './components/states/objectState';

/* alert */
import SampleTextInputAlert from './components/sweetalert/alert';

/* tests */
// import {...} from './tests/labs';

// ===============================================

const root = ReactDOM.createRoot(document.getElementById('root'));

// TODO: indexed component menu (router) [*]
root.render(
	<React.Fragment>
		{/* <Jungle /> */}
		{/* <TodoSample /> */}

		{/* <Parent /> */}
		{/* <UserApp /> */}

		{/* <Departement /> */}
		{/* <Forms /> */}

		{/* <Clock /> */}

		{/* <Ref /> */}

		{/* <ObjectState /> */}
		<SampleTextInputAlert />

		{/* <Parent /> */}
	</React.Fragment>,
);

reportWebVitals();
