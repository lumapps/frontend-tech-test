import {useMemo} from 'react';

export const ELLIPSIS = '…';

const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({length}, (_, idx) => idx + start);
};

interface UsePaginationProps {
    totalPages: number;
    currentPage: number;
    /**
     * The number of pages to display around the current page.
     */
    siblingCount?: number;
}

export const usePagination = ({totalPages, currentPage, siblingCount = 1}: UsePaginationProps) => {
    return useMemo(() => {
        // Number of items to display: 1st + last + current + siblings + 2*DOTS
        const totalPageNumbers = siblingCount + 5;
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        // Not enough pages to bother with ellipsis
        if (totalPageNumbers >= totalPages) {
            return range(1, totalPages);
        }

        // Only show right dots
        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount;
            const leftRange = range(1, leftItemCount);
            return [...leftRange, ELLIPSIS, totalPages];
        }

        // Only show left dots
        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount;
            const rightRange = range(totalPages - rightItemCount + 1, totalPages);
            return [firstPageIndex, ELLIPSIS, ...rightRange];
        }

        // Show both dots
        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, ELLIPSIS, ...middleRange, ELLIPSIS, lastPageIndex];
        }

        // Fallback
        return range(1, totalPages);
    }, [totalPages, siblingCount, currentPage]);
};