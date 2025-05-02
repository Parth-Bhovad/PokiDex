const sortPokemons = (pokemons, sortOption) => {
    const sorted = [...pokemons];
    switch (sortOption) {
      case "id-asc":
        return sorted.sort((a, b) => a.id - b.id);
      case "id-desc":
        return sorted.sort((a, b) => b.id - a.id);
      case "name-asc":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return sorted;
    }
  };
  
export default sortPokemons;