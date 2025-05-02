import React, { createContext, useContext } from 'react';
import usePokemonList from '../hooks/usePokemonList';

// Create context
const PokemonContext = createContext();

// Provider component
export const PokemonProvider = ({ children }) => {
  const pokemonList = usePokemonList();
  return (
    <PokemonContext.Provider value={pokemonList}>
      {children}
    </PokemonContext.Provider>
  );
};

// Custom hook to use context
export const usePokemon = () => useContext(PokemonContext);