import React from 'react';

import { Thumbnail, TextField } from '@lumx/react';

import './index.scss';
import logo from '../../assets/logo.png';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
}

export const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearchSubmit();
    }
  };

  return (
    <header className="header">
      <Thumbnail
        image={logo}
        className="header__logo"
        alt="Star Wars Logo"
      />
      <TextField
        value={searchQuery}
        onChange={onSearchChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for a character..."
        icon="magnify"
        className="header__search-field"
      />
    </header>
  );
};