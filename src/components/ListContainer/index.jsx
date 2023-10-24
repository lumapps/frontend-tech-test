import React from "react";
import useFetch from "../../hooks/useFetch";
import calculatePageNumber from "../../api/calculatePageNumber";
import CharacterCard from "../CharacterCard";
import placeholder from '../../api/placeholder'

const ListContainer = () => {
  const data = placeholder
  const loading = false
  const error = null
  // const { data, loading, error } = useFetch("/characters");

  !loading && error && console.error(error)
  !loading && console.log('Pages number: ', calculatePageNumber(data?.response?.data?.data.total));

  return !loading && !error ? (
    <div className="list-container">
      {data?.response?.data?.data.results.map((item) => (
        <CharacterCard key={item.id} character={item} />
      ))}
    </div>
    ) : (
    <p>Loading...</p> //TO DO: Switch to a real loading component
  );
};

export default ListContainer;
