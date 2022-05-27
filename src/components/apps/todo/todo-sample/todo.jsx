import React from 'react';

/* components */
import TaskForm from './_task-form';
import TaskHeader from './_task-header';
import TaskList from './_task-list';

/* style */
import '../common/todo.min.css';

export default function TodoSample() {
	const [tasks, setTasks] = React.useState([
		{ id: Date.now(), text: 'Tache1', isDone: false },
	]);

	/**
	 * @description - ajout d'une tache en prenant le state text du composant TaskForm
	 */
	const addTask = text => {
		const newTask = {
			id: Date.now(),
			text: text,
			isDone: false,
		};

		setTasks([...tasks, newTask]);
	};

	/**
	 * @description - suppression d'une tache a partir de son id
	 */
	const deleteTask = id => {
		const newTasks = tasks.filter(task => task.id !== id);
		setTasks(newTasks);
	};

	/**
	 * @description - changement de l'etat d'une tache a partir de son id
	 */
	const toggleTask = id => {
		const realTask = tasks.find(task => task.id === id); // recuperer la tache concernEe
		const indexTask = tasks.findIndex(task => task.id === id); // recuperer son index
		const taskCopy = { ...realTask }; // creation d'une copie de la tache concernEe
		const tasksCopy = [...tasks]; // creation d'une copie de toute la tache

		taskCopy.isDone = !taskCopy.isDone; // modification de la proprietE isDone de la copie
		tasksCopy[indexTask] = taskCopy; // replacement de l'objet qui se trouve dans l'index du tableau d'objet tasksCopy
		setTasks(tasksCopy); // mise a jour du state tasks
	};

	return (
		<React.Fragment>
			<div className="container">
				<article>
					<header>
						<TaskHeader tasks={tasks} />
					</header>
					<TaskList
						tasks={tasks}
						deleteTask={deleteTask}
						toggleTask={toggleTask}
					/>
					<footer>
						<TaskForm addTask={addTask} />
					</footer>
				</article>
			</div>
		</React.Fragment>
	);
}
