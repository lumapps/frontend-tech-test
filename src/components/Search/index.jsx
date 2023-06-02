import React, { useState } from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';


const Search = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (value) => {
    console.log(value);
    setSearch(value);
  };

  return (
	<TextField
		theme={Theme.dark}
		placeholder="Search ..."
		icon={mdiMagnify}
		onChange={handleSearch}
		value={search}
	/>
  );
};

export default Search;
