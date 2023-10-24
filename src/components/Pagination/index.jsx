import React from "react";
import PaginationNumber from "./PaginationNumber";
import { Icon, Size } from "@lumx/react";
import { mdiChevronRight } from "@mdi/js";
import { mdiChevronLeft } from "@mdi/js";

const Pagination = ({
  firstIndex,
  lastIndex,
  resultsPerPage,
  pagesNumber,
  currentPage,
  setCurrentPage,
}) => {
  const handleClickPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleClickNext = () => {
    if (currentPage < pagesNumber) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handleClickNumber = (number) => {
    currentPage !== number && setCurrentPage(number);
  };

  const isFirstThreePages = firstIndex < (3 * resultsPerPage);
  const isLastThreePages =
    lastIndex > pagesNumber * resultsPerPage - (3 * resultsPerPage);

  const numbersToDisplay = () => {
    if (isFirstThreePages) return [2, 3, 4]
    else if (isLastThreePages) return [pagesNumber -3, pagesNumber - 2, pagesNumber - 1]
    else return [currentPage -1, currentPage, currentPage +1]
}

  return (
    <ul className="pagination">
      <li className="pagination__button" onClick={handleClickPrev}>
        <Icon icon={mdiChevronLeft} size={Size.s} />
      </li>
      <PaginationNumber
        isActive={currentPage === 1}
        value={1}
        onClick={() => handleClickNumber(1)}
      />
      {!isFirstThreePages && (
        <PaginationNumber isActive={false} value={"..."} onClick={null} />
      )}
      {numbersToDisplay().map((number) => {
        return (
            <PaginationNumber
              key={number}
              isActive={number === currentPage}
              value={number}
              onClick={() => handleClickNumber(number)}
            />
        )
      })}
      {!isLastThreePages && (
        <PaginationNumber isActive={false} value={"..."} onClick={null} />
      )}
      <PaginationNumber
        isActive={currentPage === pagesNumber}
        value={pagesNumber}
        onClick={() => handleClickNumber(pagesNumber)}
      />
      <li className="pagination__button" onClick={handleClickNext}>
        <Icon icon={mdiChevronRight} size={Size.s} />
      </li>
    </ul>
  );
};

export default Pagination;
