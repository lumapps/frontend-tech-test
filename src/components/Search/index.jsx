import React, { useState } from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';


const Search = () => {
  const [search, setSearch] = useState('');

  const handleSearch = (value) => {
    console.log(value);
    setSearch(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
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

export default Search;
