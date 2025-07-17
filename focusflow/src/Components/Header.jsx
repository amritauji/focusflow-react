import { useEffect, useState } from "react";
import Taskform from "./Taskform";
import TaskList from "./Tasklist";
import FilterBar from "./FilterBar";

function Header() {
    const [tasks, setTasks] = useState(() => {
        try {
            const saved = localStorage.getItem("focusflow-tasks");
            return saved ? JSON.parse(saved) : [];
        } catch (err) {
            console.error("Failed to load tasks from localStorage:", err);
            return [];
        }
    });

    const [filter, setFilter] = useState("All");

    function handleTask(task) {
        setTasks([...tasks, task]);
    }

    function handleToggleComplete(taskId) {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    }

    function handleDelete(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    function filteredTasks() {
        if (filter === "Completed") return tasks.filter(t => t.completed);
        if (filter === "Pending") return tasks.filter(t => !t.completed);
        return tasks;
    }


    useEffect(() => {
        localStorage.setItem("focusflow-tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <>
            <div className="container mt-5">
                <h1 className="text-center mb-4">FocusFlow</h1>
                <Taskform onAddTask={handleTask} />
                <FilterBar currentFilter={filter} onChangeFilter={setFilter} />
                <TaskList
                    tasks={filteredTasks()}
                    onToggleComplete={handleToggleComplete}
                    onDelete={handleDelete}
                />
            </div>

        </>
    );
}

export default Header;
