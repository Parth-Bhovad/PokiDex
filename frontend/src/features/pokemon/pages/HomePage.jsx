import PokemonList from "../components/PokemonList";
import Pagination from "../components/Pagination";
import ItemPerPage from "../components/ItemPerPage";
import SortDropdown from "../components/SortDropdown";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";

import { useState } from 'react';

function HomePage() {

    const [sortOption, setSortOption] = useState("id-asc");
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [searchQuery, setSearchQuery] = useState("")

    const handleTypeChange = (e) => {
        const { value, checked } = e.target;

        setSelectedTypes((prevSelected) =>
            checked
                ? [...prevSelected, value]  // add if checked
                : prevSelected.filter((type) => type !== value) // remove if unchecked
        );
    };
    console.log(selectedTypes);


    return (
        <main>
            <Filter handleTypeChange={handleTypeChange} />
            <SortDropdown sortOption={sortOption} setSortOption={setSortOption} />
            <ItemPerPage />
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <PokemonList sortOption={sortOption} selectedTypes={selectedTypes} searchQuery={searchQuery} />
            <Pagination />
        </main>
    );
}

export default HomePage;