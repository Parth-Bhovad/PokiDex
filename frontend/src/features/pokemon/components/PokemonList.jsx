import PokemonCard from './PokemonCard';
import { usePokemon } from '../context/PokemonContext';
import useFavorites from '../hooks/useFavorites';
import sortPokemons from '../utils/sortUtils';
import { useMemo } from 'react';

function PokemonList({ favMode = false, sortOption = "id-asc", selectedTypes, searchQuery }) {
    const { pokemon, loading } = usePokemon();
    const { favorites } = useFavorites();

    // Apply filtering + sorting inside useMemo for optimized re-rendering
    const finalPokemonList = useMemo(() => {
        let list = favMode
            ? pokemon.filter(p => favorites.includes(p.id))
            : pokemon;

        if (selectedTypes.length > 0) {
            list = list.filter(list =>
                list.types.some(typeObj => selectedTypes.includes(typeObj.type.name))
            );
            console.log(list);

        }

        if (searchQuery.trim() !== "") {
            list = list.filter(p =>
              p.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
          }

        return sortPokemons(list, sortOption);
    }, [pokemon, favorites, favMode, selectedTypes, searchQuery, sortOption]);

    return (
        <>
            {loading && (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
                    <h1>Loading</h1>
                </div>
            )}

            {!loading && (
                <section>
                    <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
                        {finalPokemonList.map(p => (
                            <PokemonCard key={p.id} pokemon={p} />
                        ))}
                    </div>
                </section>
            )}
        </>
    );
}

export default PokemonList;
