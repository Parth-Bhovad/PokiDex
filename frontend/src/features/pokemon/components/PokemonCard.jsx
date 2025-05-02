import { useNavigate } from "react-router-dom";

function PokemonCard({ pokemon }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/pokemon/${pokemon.id}`); // Navigate to the Pokemon detail page
    }

    return (
        <div className="card col mb-4" key={pokemon.id} onClick={handleClick}>
            <img src={`${pokemon.sprites.front_shiny}`} className="card-img-top" width="120" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name: {pokemon.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Id: {pokemon.id}</li>
                {pokemon.types.map((type, index) => (
                    <li className="list-group-item" key={index}>Type: {type.type.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonCard;