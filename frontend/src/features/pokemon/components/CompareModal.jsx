function CompareModal({loading, compare}) {
    return (
        <>
            {loading && <h1>Loading...</h1>}
            {!loading && (
                <div className="row">
                    {compare.map((pokemon, index) => {
                        return (
                            <div className="col" key={index}>
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
                                </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default CompareModal;