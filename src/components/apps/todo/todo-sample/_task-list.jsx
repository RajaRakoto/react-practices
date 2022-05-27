import React from 'react';

/**
 * @description - generateur de tache pour le composant TaskList
 */
function TaskItem({ task, deleteTask, toggleTask }) {
	const handleDelClick = () => {
		deleteTask(task.id);
	};

	const handleToggleClick = () => {
		toggleTask(task.id);
	};

	return (
		<React.Fragment>
			<div className="task-item container-fuild">
				<div className="row">
					<div className="col-6">
						<span>
							<input
								type="checkbox"
								defaultChecked={task.isDone}
								onChange={handleToggleClick}
							/>
						</span>
						<span>{task.text}</span>
					</div>
					<div className="col-6 d-flex justify-content-end">
						<button
							className="button-6"
							style={{
								backgroundColor: 'rgb(240, 154, 123)',
								color: '#eee',
								height: 10,
								marginLeft: 10,
							}}
							onClick={handleDelClick}
						>
							supprimer
						</button>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default function TaksList({ tasks, deleteTask, toggleTask }) {
	return (
		<React.Fragment>
			<ul>
				{tasks.map(task => (
					<li key={task.id}>
						<TaskItem
							task={task}
							deleteTask={deleteTask}
							toggleTask={toggleTask}
						/>
					</li>
				))}
			</ul>
		</React.Fragment>
	);
}
