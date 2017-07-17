import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getAPIDetails from './asyncActions';
import Header from './Header';
import Spinner from './Spinner';

class Details extends React.Component {
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getAPIData();
    }
  }

  render() {
    const { title, description, year, poster, trailer } = this.props;
    let rating;
    if (this.props.rating) {
      rating = <h3>{this.props.rating}</h3>;
    } else {
      rating = <Spinner />;
    }

    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>{year}</h2>
          {rating}
          <img
            alt={`Poster for ${title}`}
            src={`/public/img/posters/${poster}`}
          />
          <p>{description}</p>
        </section>
        <div className="">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=1&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen="0"
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  trailer: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  getAPIData: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.imdbID]
    ? state.apiData[ownProps.imdbID]
    : {};
  return {
    rating: apiData.rating
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  getAPIData() {
    dispatch(getAPIDetails(ownProps.imdbID));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
