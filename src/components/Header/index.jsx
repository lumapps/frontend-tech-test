import React from 'react';
import PropTypes from 'prop-types';
import { FlexBox, Alignment } from '@lumx/react';
import Search from '../Search';

const Header = ({ search, setSearch }) => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.right}>
			<Search search={search} setSearch={setSearch} />
		</FlexBox>
	</header>
);

Header.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Header;
