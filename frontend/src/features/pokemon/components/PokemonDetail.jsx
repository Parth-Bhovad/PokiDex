import usePokemonDetails from "../hooks/usePokemonDetail";
import useFavorites from "../hooks/useFavorites";

function PokemonDetail({ pokemonId }) {
    const { pokemon, evolutionChain } = usePokemonDetails(pokemonId); // Fetch Pokemon details and evolution chain
    const { addFavorite, isFavorite, removeFavorite } = useFavorites(); // Manage favorites

    return (
        <div>
            <div
                className="fav d-flex justify-content-end"
                onClick={() =>
                    isFavorite(pokemonId)
                        ? removeFavorite(pokemonId)
                        : addFavorite(pokemonId)
                }
            >
                <i
                    className={`fa-heart p-4 text-end ${isFavorite(pokemonId)
                            ? "fa-solid text-danger"
                            : "fa-regular text-dark"
                        }`}
                ></i>
            </div>
            <div className="img-section">
                <img src={pokemon?.sprites?.front_shiny} alt={pokemon?.name} /> {/* Display Pokemon image */}
                <p className="pokemon-name">{pokemon?.name}</p>
            </div>

            <section className="stats">
                <h3>Stats</h3>
                <ul className="list-group list-group-flush">
                    {pokemon?.stats?.map((stat, index) => (
                        <li className="list-group-item" key={index}>
                            {stat.stat.name}: {stat.base_stat} {/* Display each stat */}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3>Abilities</h3>
                <ul className="list-group list-group-flush">
                    {pokemon?.abilities?.map((ability, index) => (
                        <li className="list-group-item" key={index}>
                            {ability.ability.name} {/* Display each ability */}
                        </li>
                    ))}
                </ul>
            </section>

            <section>
                <h3>Moves</h3>
                <ul className="list-group list-group-flush">
                    {pokemon?.moves?.length}
                </ul>
            </section>

            <section>
                <h3>Evolution chain</h3>
                <ul className="list-group list-group-flush">
                    {evolutionChain.map((evo, index) => (
                        <li className="list-group-item" key={index}>
                            {evo} {/* Display each evolution name */}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

export default PokemonDetail;