import React from 'react';
import { TextField } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import debounce from './debounce';

const Search = () => {
	const debounceSearchResult = debounce((text) => console.log(text), 350)

	return (
	<TextField className="search-field" placeholder="Search ..." icon={mdiMagnify} onChange={(e) => debounceSearchResult(e)} />
)};

export default Search;
