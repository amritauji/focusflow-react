import { useState } from "react";

function Taskform({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const categories = ['Work', 'Personal', 'Study', 'Health', 'Other'];

    function handleSubmit(event) {
        event.preventDefault();
        if (!title || !category) {
            return;
        }

        onAddTask({
            id: Date.now(),
            title,
            category,
            completed: false,
        })

        setTitle("");
        setCategory("");
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Add New Task" />
                </div>
                <div className="mb-3">
                    <select value={category} onChange={(event) => setCategory(event.target.value)}>
                        <option value="">Select Categories</option>
                        {
                            categories.map((items, index) => (
                                <option value={items} key={index}>{items}</option>
                            ))
                        }
                    </select>
                </div>
                <br />
                <button className="btn btn-success " type="submit">Add Task</button>
            </form>
        </>
    )
}

export default Taskform;