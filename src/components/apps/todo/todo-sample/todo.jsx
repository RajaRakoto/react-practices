import React from 'react';

/* components */
import TaskForm from './_task-form';
import TaskHeader from './_task-header';
import TaskList from './_task-list';

export default function TodoSample() {
	const [tasks, setTasks] = React.useState([]);

	return (
		<React.Fragment>
			<div className="container">
				<article>
					<header>
						<TaskHeader />
					</header>
					<TaskList />
					<footer>
						<TaskForm />
					</footer>
				</article>
			</div>
		</React.Fragment>
	);
}
