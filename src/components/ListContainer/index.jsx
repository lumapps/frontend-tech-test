import React from "react";
import useFetch from "../../hooks/useFetch";
import calculatePageNumber from "../../api/calculatePageNumber";
import CharacterCard from "../CharacterCard";

const ListContainer = () => {
  const { data, loading, error } = useFetch("/characters");
  !loading && error && console.error(error)
  !loading && console.log('Pages number: ', calculatePageNumber(data.response.data.data.total));

  return loading ? (
    <p>Loading...</p> //TO DO: Switch to a real loading component
  ) : (
    <div className="list-container">
      {data.response.data.data.results.map((item) => (
        <CharacterCard key={item.id} character={item} />
      ))}
    </div>
  );
};

export default ListContainer;
