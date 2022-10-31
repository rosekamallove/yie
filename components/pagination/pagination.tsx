import React from "react";
import { usePagination, DOTS } from "./usePagination";

interface P {
  onPageChange: any;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
}

const Pagination: React.FC<P> = (
  {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  }
) => {

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (!paginationRange) {
    return null;
  }

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  return (
    <ul
      className="flex list-none text-center justify-center gap-2 transition-all my-10"
    >
      {paginationRange.map((pageNumber) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="p-2 transition-all h-[32px] rounded-full dots">&#8230;</li>;
        }

        // Render our Page Pills
        return (
          <li
            className={`p-3 transition-all flex justify-center items-center bg-gray-100 hover:bg-gray-300 cursor-pointer h-[32px] rounded-full ${pageNumber == currentPage ? 'bg-gray-300' : ''}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
    </ul >
  );
};

export default Pagination;
