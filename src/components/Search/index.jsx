import React from 'react';
import axios from 'axios';
import 'dotenv/config';
import PropTypes from 'prop-types';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';


const Search = ({ search, setSearch }) => {
  /* Function to handle the search input */
  const handleSearch = (value) => {
    // console.log(value);
    setSearch(value);
  };

  /* Function to handle the form submission */
  const handleSubmit = (event) => {
    event.preventDefault();
    const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
    axios.get('https://gateway.marvel.com:443/v1/public/characters', {
      params: {
        nameStartsWith: search,
        apikey: apiKey,
      },
    })
      .then((response) => {
        console.log(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
	<form className="form" onSubmit={handleSubmit}>
		<TextField
			theme={Theme.dark}
			placeholder="Search ..."
			icon={mdiMagnify}
			onChange={handleSearch}
			value={search}
		/>
	</form>
  );
};

Search.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Search;
