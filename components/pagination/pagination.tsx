import React from "react";
import { usePagination, DOTS } from "./usePagination";

interface P {
  onPageChange: any; // callback function invoked with updated page value
  totalCount: number; // total count of data available
  siblingCount?: number; // min number of page buttons to show (default = 1)
  currentPage: number; // current active page (1 based indexing used)
  pageSize: number; //  represents the max data on a page
}

const Pagination: React.FC<P> = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (!paginationRange) {
    return null;
  }

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul className="flex list-none text-center justify-center gap-2 transition-all my-10">
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li className="p-2 transition-all h-[32px] rounded-full dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            className={`p-3 transition-all flex justify-center items-center bg-gray-100 hover:bg-gray-300 cursor-pointer h-[32px] rounded-full ${
              pageNumber == currentPage ? "bg-gray-300" : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
