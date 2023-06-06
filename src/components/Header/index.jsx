import React from 'react';
import PropTypes from 'prop-types';
import { FlexBox, Alignment } from '@lumx/react';
import Search from '../Search';

const Header = ({
  search, setSearch, characters, setCharacters,
}) => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.right}>
			<Search search={search} setSearch={setSearch} characters={characters} setCharacters={setCharacters} />
		</FlexBox>
	</header>
);

Header.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCharacters: PropTypes.func.isRequired,
};

export default Header;
