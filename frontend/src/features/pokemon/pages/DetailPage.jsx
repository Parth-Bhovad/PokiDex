import PokemonDetail from "../components/PokemonDetail";
import { useParams } from "react-router-dom";

function DetailPage() {

    const { id } = useParams(); // Get the ID from the URL parameters

    return (
        <PokemonDetail pokemonId={id} />
    );
}

export default DetailPage;