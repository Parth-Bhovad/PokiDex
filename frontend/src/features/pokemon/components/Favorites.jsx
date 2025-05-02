import PokemonList from "./PokemonList";

function Favorites() {
    return ( 
        <main>
            <PokemonList favMode={true} />
        </main>
     );
}

export default Favorites;