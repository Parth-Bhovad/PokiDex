function Filter({ handleTypeChange }) {

    const pokemonTypes = [
        "normal", "fighting", "flying", "poison", "ground", "rock",
        "bug", "ghost", "steel", "fire", "water", "grass", "electric",
        "psychic", "ice", "dragon", "dark", "fairy"
    ];


    return (
        <div className="container">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Filter
                </button>
                <ul className="dropdown-menu">
                    {pokemonTypes.map((type, index) => (
                        <li className="dropdown-item" key={index}>
                            <div className="form-check" key={index}>
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value={type}
                                    id={`check-${type}`}
                                    onChange={handleTypeChange}
                                />
                                <label className="form-check-label" htmlFor={`check-${type}`}>
                                    {type.charAt(0).toUpperCase() + type.slice(1)}
                                </label>
                            </div></li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Filter;