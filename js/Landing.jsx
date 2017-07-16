import React from 'react';
import PropTypes from 'prop-types';
import { /* Link, */ withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setSearchTerm } from './actionCreators';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.goToSearch = this.goToSearch.bind(this);
  }

  goToSearch(e) {
    e.preventDefault();
    if (e.target.name === 'browseAll') {
      this.props.handleSearch(e);
    }
    this.props.history.push('/search');
  }

  render() {
    const { searchTerm, handleSearch } = this.props;
    return (
      <div className="landing">
        <h2>Video</h2>
        <form onSubmit={this.goToSearch}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </form>
        <button name="browseAll" onClick={this.goToSearch} value="">
          or browse all
        </button>
      </div>
    );
  }
}

Landing.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

const mapDispatchToProps = dispatch => ({
  handleSearch(e) {
    dispatch(setSearchTerm(e.target.value));
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Landing)
);
