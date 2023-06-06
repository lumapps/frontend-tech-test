import React from 'react';
import axios from 'axios';
import 'dotenv/config';
// import PropTypes from 'prop-types';
import { FlexBox, Alignment } from '@lumx/react';


const Card = () => {
  const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
  axios.get('https://gateway.marvel.com:443/v1/public/characters', {
    params: {
      nameStartsWith: 'spider',
      apikey: apiKey,
    },
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
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
