import { usePokemon } from '../context/PokemonContext';

function ItemPerPage() {

    const { handleItemsPerPageChange, itemsPerPage } = usePokemon();
    console.log("render ItemPerPage");
    

    return (
        <select className="form-select" aria-label="Default select example" value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={10}>Pokemons per page 10</option>
            <option value={20}>Pokemons per page 20</option>
            <option value={50}>Pokemons per page 50</option>
        </select>
    );
}

export default ItemPerPage;