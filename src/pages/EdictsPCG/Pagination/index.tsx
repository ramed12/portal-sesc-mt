import "./styles.scss"

function Pagination(props: any) {
    const pageNumbers = [];
    for (let i = 1; i <= props.totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <ul>
                <li className={props.currentPage === 1 ? "disabled" : ""}>
                    <a onClick={() => props.onPageChange(props.currentPage - 1)}>
                        <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.93455 5.50035L7.01809 9.58719L5.8516 10.7546L0.601562 5.50035L5.8516 0.246094L7.01809 1.41352L2.93455 5.50035Z" fill="#848484" />
                        </svg>
                    </a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={props.currentPage === number ? "active" : ""}>
                        <a onClick={() => props.onPageChange(number)}>
                            {number}
                        </a>
                    </li>
                ))}
                <li className={props.currentPage === props.totalPages ? "disabled" : ""}>
                    <a onClick={() => props.onPageChange(props.currentPage + 1)}>
                        <svg width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.06545 5.50035L0.98191 9.58719L2.1484 10.7546L7.39844 5.50035L2.1484 0.246094L0.98191 1.41352L5.06545 5.50035Z" fill="#848484" />
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Pagination;
