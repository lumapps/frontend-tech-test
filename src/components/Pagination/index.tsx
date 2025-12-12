import React from 'react';
import './index.scss';
import { usePagination, ELLIPSIS } from './usePagination';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) {
    return null;
  }

  const paginationRange = usePagination({ currentPage, totalPages });

  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Go to previous page"
      >
        &lt;
      </button>
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === ELLIPSIS) {
          return (
            <span key={`ellipsis-${index}`} className="pagination__ellipsis">
              {ELLIPSIS}
            </span>
          );
        }

        const isActive = pageNumber === currentPage;
        const className = `pagination__button ${isActive ? 'pagination__button--active' : ''}`.trim();

        return (
          <button
            key={pageNumber}
            className={className}
            onClick={() => onPageChange(pageNumber as number)}
            aria-current={isActive ? 'page' : undefined}
          >
            {pageNumber}
          </button>
        );
      })}

      <button
        className="pagination__button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Go to next page"
      >
        &gt;
      </button>
    </div>
  );
};
