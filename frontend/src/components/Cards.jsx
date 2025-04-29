function Card({ pokimons, searchResults, pokiTypes }) {
    return (
        <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-1 row-cols-1">
            {
                searchResults.length > 0 ?
                    searchResults.map((item) => (
                        <div className="card col mb-4" key={item.id}>
                            <img src={`${item.sprites.front_shiny}`} className="card-img-top" width="120" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Name: {item.name}</h5>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Id: {item.id}</li>
                                {item.types.map((type, index) => (
                                    <li className="list-group-item" key={index}>Type: {type.type.name}</li>
                                ))}
                            </ul>
                        </div>
                    )) :
                    pokiTypes === undefined ?
                        pokimons.map((pokimon) => (
                            <div className="card col mb-4" key={pokimon.id}>
                                <img src={`${pokimon.sprites.front_shiny}`} className="card-img-top" width="120" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Name: {pokimon.name}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Id: {pokimon.id}</li>
                                    {pokimon.types.map((type, index) => (
                                        <li className="list-group-item" key={index}>Type: {type.type.name}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                        :
                        pokiTypes?.map((poki) => (
                            <div className="col mb-4" key={poki.id}>
                                <div className="card h-100">
                                    <img src={poki.sprites.front_shiny} className="card-img-top" alt={poki.name} />
                                    <div className="card-body">
                                        <h5 className="card-title">{poki.name}</h5>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Id: {poki.id}</li>
                                    {poki.types.map((type, index) => (
                                        <li className="list-group-item" key={index}>Type: {type.type.name}</li>
                                    ))}
                                </ul>
                                </div>
                            </div>
                        ))
            }
        </div>
    );
}

export default Card;