function FilterBar({ currentFilter, onchangeFilter }) {
    const filters = ["All", "Completed", "Pending"];

    return (
        <div className="btn-group my-3" role="group">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => onchangeFilter(filter)}
                    className={`btn ${currentFilter === filter ? "btn-primary" : "btn-outline-primary"}`}
                >
                    {filter}
                </button>
            ))}
        </div>

    )
}

export default FilterBar;