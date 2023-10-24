import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import calculatePageNumber from "../../api/calculatePageNumber";
import CharacterCard from "../CharacterCard";
import placeholder from "../../api/placeholder";
import Pagination from "../Pagination";

const ListContainer = () => {
  // // USE OF THE API
  // const [ currentPage, setCurrentPage ] = useState(1)
  // const resultsPerPage = 4
  // const offset = currentPage * resultsPerPage
  // const { data, loading, error } = useFetch(`/characters?limit=${resultsPerPage}&offset=${offset}`, {}, [currentPage]);
  // const lastIndex = currentPage * resultsPerPage;
  // const firstIndex = lastIndex - resultsPerPage;
  // const pagesNumber = calculatePageNumber(
  //   data?.response?.data?.data?.results.length,
  //   resultsPerPage
  // );

  // USE OF THE PLACEHOLDER
  const data = placeholder;
  const loading = false;
  const error = null;

  const [currentPage, setCurrentPage] = useState(1);

  const resultsPerPage = 4;
  const lastIndex = currentPage * resultsPerPage;
  const firstIndex = lastIndex - resultsPerPage;
  const pagesNumber = calculatePageNumber(
    data.response.data.data.results.length,
    resultsPerPage
  );

  return !loading && !error ? (
    <div className="list-container">
      {data?.response?.data?.data.results
        .slice(firstIndex, lastIndex) //Only when using placeholder
        .map((item, index) => (
          <CharacterCard key={item.id ?? index} character={item} /> //id is optionnal in database so index has been added to prevent key's absence
        ))}
      {data?.response?.data?.data.results.length > 4 && (
        <Pagination
          firstIndex={firstIndex}
          lastIndex={lastIndex}
          resultsPerPage={resultsPerPage}
          pagesNumber={pagesNumber}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
    </div>
  ) : (
    <p>Loading...</p> //TO DO: Switch to a real loading component
  );
};

export default ListContainer;
