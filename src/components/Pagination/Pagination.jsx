import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i += 1) {
    pageNumbers.push(
	<NavLink
		key={i}
		to={`/${i}`}
		className={i === currentPage ? 'active' : ''}
		onClick={() => { onPageChange(i); window.scrollTo(0, 0); }}
	>
		{i}
	</NavLink>,
    );
  }

  return (
	<div className="pagination">
		{pageNumbers}
	</div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
