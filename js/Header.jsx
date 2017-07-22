import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchTerm } from './actionCreators';

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

Header.propTypes = {
  showSearch: PropTypes.bool,
  handleSearch: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  handleSearch(e) {
    dispatch(setSearchTerm(e.target.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
