import React from 'react';
// import PropTypes from 'prop-types';
import { FlexBox, Alignment } from '@lumx/react';


const Card = () => {

  return (
	<header className="lumx-spacing-padding-big header">
		<FlexBox vAlign={Alignment.spaceAround}>
			<h1 className="lumx-typography-display1">React LumX</h1>
		</FlexBox>
	</header>
  );
};

/* Card.propTypes = {

}; */

export default Card;
