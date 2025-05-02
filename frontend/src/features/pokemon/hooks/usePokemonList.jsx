import { useState, useEffect, useCallback } from "react";
import { getPokemonList, getPokemonDetails } from "../api/pokemonAPI";

function usePokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(15);
  const [loading, setLoading] = useState(true);

  const fetchPokemonData = async () => {
    try {
      setLoading(true);
      const offset = (currentPage - 1) * itemsPerPage;

      const results = await getPokemonList(itemsPerPage, offset);
      const urls = results.map(item => item.url);
      const pokemonData = await getPokemonDetails(urls);

      setPokemon(pokemonData);
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonData();
  }, [currentPage, itemsPerPage]);

  const handleItemsPerPageChange = (e) => {
    const parsedValue = Number(e.target.value);
    setItemsPerPage(parsedValue);
    setCurrentPage(1);
    setTotalPages(Math.ceil(150 / parsedValue));
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return {
    handleItemsPerPageChange,
    itemsPerPage,
    totalPages,
    handlePageChange,
    currentPage,
    loading,
    pokemon
  };
}

export default usePokemonList;