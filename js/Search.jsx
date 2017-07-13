import React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

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
        <header>
          <h1>Video</h1>
          <input
            type="text"
            value={this.state.searchTerm}
            onChange={this.handleSearch}
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
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

export default Search;
