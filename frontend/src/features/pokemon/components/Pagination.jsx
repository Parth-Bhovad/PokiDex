import { usePokemon } from '../context/PokemonContext';

function Pagination() {
    const { totalPages, currentPage, handlePageChange } = usePokemon();

    return (
        <nav aria-label="Page navigation example" style={{width:"90vw"}}>
            <ul className="pagination">
                <li className="page-item" onClick={() => currentPage !== 1 && handlePageChange(currentPage - 1)}>
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <li className={`page-item ${(index+1) === currentPage ? "active" : ""}`} key={index} ><a className="page-link" href="#">{index+1}</a></li>
                ))}
                <li className="page-item" onClick={() => currentPage !== totalPages && handlePageChange(currentPage + 1)}>
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;