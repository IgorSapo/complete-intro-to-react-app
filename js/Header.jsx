import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ showSearch, handleSearch, searchTerm }) => {
  let utilSpace;
  if (showSearch) {
    utilSpace = (
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search"
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }

  return (
    <header>
      <h1>
        <Link to="/">Video</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

Header.defaultProps = {
  showSearch: false
};

export default Header;
