function SearchBar({searchQuery, setSearchQuery}) {
    return (
        <div className="mb-3">
            <input type="email" className="form-control" placeholder="Enter The Pokimon Name" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
        </div>
    );
}

export default SearchBar;