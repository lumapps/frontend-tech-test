import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { Header } from '../Header';
import { Content } from '../Content';

export const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [triggerSearch, setTriggerSearch] = useState(0);

  const handleSearchSubmit = () => {
    setTriggerSearch(prev => prev + 1);
  };

  return (
    <Router>
			<Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />
			<Routes>
				<Route path="/" element={<Content searchQuery={searchQuery} triggerSearch={triggerSearch} />} />
			</Routes>
		</Router>
  );
}
