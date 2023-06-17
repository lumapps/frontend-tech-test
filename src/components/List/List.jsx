/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Pagination from '../Pagination/Pagination';

function List({ characters }) {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(characters.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCharacters = characters.slice(indexOfFirstItem, indexOfLastItem);

  const charactersList = currentCharacters.map((character) => (
	<Card key={character.id} picture={`${character.thumbnail.path}.${character.thumbnail.extension}`} name={character.name} description={character.description} comics={character.comics.available} series={character.series.available} stories={character.stories.available} />
  ));
  return (

	<div className="list">
		{charactersList}
		<Pagination
			currentPage={currentPage}
			totalPages={totalPages}
			onPageChange={setCurrentPage}
		/>
	</div>
  );
}
List.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default List;
