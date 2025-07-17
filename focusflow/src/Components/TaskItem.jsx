function TaskItem({ task, onToggleComplete, onDelete }) {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggleComplete(task.id)}
                    className="form-check-input me-2"
                />
                <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                    {task.title} - <small className="text-muted">{task.category}</small>
                </span>
            </div>
            <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(task.id)}>Delete</button>
        </li>
    );
}

export default TaskItem;