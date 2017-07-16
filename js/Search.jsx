import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = ({ shows, searchTerm, handleSearch }) => (
  <div className="search">
    <Header showSearch />
    <div>
      {shows
        .filter(show =>
          `${show.title} ${show.description}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

Search.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export const Unwrapped = Search;

export default connect(mapStateToProps)(Search);
