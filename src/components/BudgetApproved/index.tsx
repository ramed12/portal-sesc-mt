import Pagination from "./Pagination";
import PaginatedTable from "./PaginationTable";
import mock from "./mock.json";
import { useState } from "react";

export function BudgetApproved() {
    const [currentPage, setCurrentPage] = useState(1);
    const perPage = mock.perPage;
    const totalPages = mock.countPage;

    function handlePageChange(pageNumber: any) {
        if (pageNumber < 1 || pageNumber > totalPages) {
            return;
        }
        setCurrentPage(pageNumber);
    }


    return (
        <>
            <div>
                <PaginatedTable data={mock} currentPage={currentPage} perPage={perPage} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>
        </>
    );
}
