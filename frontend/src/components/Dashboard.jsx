// ==========================
// Component & Dependency Imports
// ==========================

import Navbar from './Navbar';
import Cards from './Cards';
import SearchBar from './SearchBar';
import Filter from './Filter';
import Loader from './loader/Loader';

import { useState, useEffect } from 'react';
import axios from 'axios';

// ==========================
// Dashboard Component
// ==========================

function Dashboard() {
    // ==========================
    // State Management
    // ==========================

    const [searchQuery, setSearchQuery] = useState("");      // Search bar query
    const [searchResults, setSearchResults] = useState([]);  // Filtered search results
    const [pokimon, setPokemon] = useState([]);              // All fetched Pokémon
    const [pokiTypes, setPokiTypes] = useState({});          // Categorized Pokémon by type
    const [filter, setFilter] = useState("");                // Selected filter type from dropdown

    const [loading, setLoading] = useState(true);            // Loader state
    const [error, setError] = useState(null);                // Error state
    const [queryNotFound, setQueryNotFound] = useState(false); // State to handle no-search-result condition

    // ==========================
    // Utility Functions
    // ==========================

    // Group Pokémon based on their type
    const seperatePokimon = () => {
        let types = {};

        pokimon.forEach((poki) => {
            poki.types.forEach((t) => {
                if (!types[t.type.name]) {
                    types[t.type.name] = [];
                }
                types[t.type.name].push(poki);
            });
        });
        setPokiTypes(types);
    }

    // Fetch Pokémon data from API
    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            // Fetch list of 150 Pokémon with their API URLs
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=150");
            let urls = response.data.results.map((item) => item.url);

            // Fetch detailed data for each Pokémon concurrently
            const fetchPromises = urls.map((url) => axios.get(url).then(res => res.data));

            // Wait for all fetches to complete
            const results = await Promise.all(fetchPromises);

            // Set state with complete Pokémon data
            setPokemon(results);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError("Failed to fetch Pokémon.");
            setLoading(false);
        }
    };

    // ==========================
    // Side Effects
    // ==========================

    // Fetch Pokémon data once component mounts
    useEffect(() => {
        fetchData();
    }, []);

    // Separate Pokémon into type-based groups when data changes
    useEffect(() => {
        if (pokimon.length > 0) {
            seperatePokimon();
        }
    }, [pokimon]);

    // Search logic: filter Pokémon based on searchQuery and active filter
    useEffect(() => {
        if (searchQuery === "") {
            // Reset search if query is empty
            setSearchResults([]);
            setQueryNotFound(false);
        } else {
            let results = [];

            if (filter === "") {
                // No filter applied: search across all Pokémon
                results = pokimon.filter((item) =>
                    item.name.toLowerCase().includes(searchQuery.toLowerCase())
                );
            } else {
                // Filter applied: search within selected type group
                results = pokiTypes[filter]?.filter((item) =>
                    item.name.toLowerCase().includes(searchQuery.toLowerCase())
                ) || [];
            }
            if (results.length === 0) {
                setQueryNotFound(true);
            } else {
                setSearchResults(results);
                setQueryNotFound(false);
            }
        }
    }, [searchQuery, pokimon, filter]);

    // ==========================
    // JSX Layout
    // ==========================

    return (
        <>
            {/* Navigation Bar */}
            <Navbar />

            {/* Loader when data is fetching */}
            {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
                    <Loader />
                </div>
            )}

            {/* Show error if any */}
            {error && (
                <div className="text-center mt-5">
                    <h4>{error}</h4>
                </div>
            )}

            {/* Main content area */}
            {!loading && !error && (
                <div>
                    {/* Search bar and filter dropdown */}
                    <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
                    <Filter pokiTypes={pokiTypes} filter={filter} setFilter={setFilter} />

                    {/* Display if no Pokémon found */}
                    {queryNotFound ? (
                        <div className="text-center mt-5">
                            <h4>No Pokémon found.</h4>
                        </div>
                    ) : (
                        // Display Pokémon cards
                        <Cards
                            pokimons={pokimon}
                            searchResults={searchResults}
                            pokiTypes={pokiTypes[filter]}
                        />
                    )}
                </div>
            )}
        </>
    );
}

export default Dashboard;