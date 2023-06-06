/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header';
import Card from '../components/Card';

function App() {
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState([]);
  const charactersList = characters.map((character) => (
	<Card key={character.id} picture={`${character.thumbnail.path}.${character.thumbnail.extension}`} name={character.name} description={character.description} comics={character.comics.available} series={character.series.available} stories={character.stories.available} />
  ));
  return (
	<>
		<Router>
			<Header search={search} setSearch={setSearch} characters={characters} setCharacters={setCharacters} />
			<div className="list">
				{charactersList}
			</div>
			<Switch>
				<Route
					exact
					path="/"
				>
					<section className="lumx-spacing-padding-horizontal-huge" />
				</Route>
			</Switch>
		</Router>

	</>
  );
}

export default App;
