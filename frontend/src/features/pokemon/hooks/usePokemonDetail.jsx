import { useEffect, useState } from 'react';
import { fetchPokemonDetails, fetchPokemonSpecies, fetchEvolutionChain } from '../api/pokemonAPI';

function usePokemonDetails(pokemonId) {
  const [pokemon, setPokemon] = useState(null);
  const [evolutionChain, setEvolutionChain] = useState([]);

  useEffect(() => {
    const loadDetails = async () => {
      try {
        const pokemonData = await fetchPokemonDetails(pokemonId);
        setPokemon(pokemonData);

        const speciesData = await fetchPokemonSpecies(pokemonId);
        const evoChainUrl = speciesData.evolution_chain.url;
        const evoChainData = await fetchEvolutionChain(evoChainUrl);

        const evolutionNames = getEvolutionNames(evoChainData.chain);
        setEvolutionChain(evolutionNames);

      } catch (error) {
        console.error('Error loading Pokémon details:', error);
      }
    };

    const getEvolutionNames = (chain) => {
      let names = [chain.species.name];
      chain.evolves_to.forEach(evo => {
        names = names.concat(getEvolutionNames(evo));
      });
      return names;
    };

    loadDetails();
  }, [pokemonId]);

  return { pokemon, evolutionChain };
}

export default usePokemonDetails;