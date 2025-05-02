import axios from "axios";

export const getPokemonList = async (limit, offset) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  return response.data.results;
};

export const getPokemonDetails = async (urls) => {
  const responses = await Promise.all(urls.map(url => axios.get(url)));
  return responses.map(res => res.data);
};

export const fetchPokemonDetails = async (pokemonId) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  return response.data;
};

export const fetchPokemonSpecies = async (pokemonId) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
  return response.data;
};

export const fetchEvolutionChain = async (url) => {
  const response = await axios.get(url);
  return response.data;
};