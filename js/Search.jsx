import React from 'react';
import PropTypes from 'prop-types';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends React.Component {
  state = {
    searchTerm: ''
  };

  handleSearch = e =>
    this.setState({
      searchTerm: e.target.value
    });

  render() {
    return (
      <div className="search">
        <Header
          showSearch
          handleSearch={this.handleSearch}
          searchTerm={this.state.searchTerm}
        />
        {
          // <header>
          //   <h1>Video</h1>
          // <input
          //   type="text"
          //   value={this.state.searchTerm}
          //   onChange={this.handleSearch}
          //   placeholder="Search"
          // />
          //</header>
        }
        <div>
          {this.props.shows
            .filter(show =>
              `${show.title} ${show.description}`
                .toLowerCase()
                .includes(this.state.searchTerm.toLowerCase())
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  shows: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Search;
