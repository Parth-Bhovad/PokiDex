function SortDropdown({ sortOption, setSortOption }) {
    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };
    return (
        <select className="form-select" aria-label="Default select example" value={sortOption} onChange={handleSortChange}>
            <option value="id-asc">id-asc</option>
            <option value="id-desc">id-desc</option>
            <option value="name-asc">name-asc</option>
            <option value="name-desc">name-desc</option>
        </select>
    );
}

export default SortDropdown;