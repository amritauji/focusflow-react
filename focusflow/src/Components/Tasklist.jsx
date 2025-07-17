import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggleComplete, onDelete }) {
    return (
        <div>
            <h2>Your Tasks:</h2>
            {tasks.length === 0 ? (
                <p>No tasks yet. Add something!</p>
            ) : (
                    <ul className="list-group">
                        {tasks.map((task) => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                onToggleComplete={onToggleComplete}
                                onDelete={onDelete}
                            />
                        ))}
                    </ul>

            )}
        </div>
    );
}

export default TaskList;
