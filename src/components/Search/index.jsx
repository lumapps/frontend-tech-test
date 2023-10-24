import React from 'react';
import { TextField, Theme } from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';
import debounce from './debounce';

const Search = () => {
	const debounceSearchResult = debounce((text) => console.log(text), 350)

	return (
	<TextField theme={Theme.dark} placeholder="Search ..." icon={mdiMagnify} onChange={(e) => debounceSearchResult(e)} />
)};

export default Search;
