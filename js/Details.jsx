import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Details = ({ title, description, year, poster, trailer }) => {
  return (
    <div className="details">
      <Header />
      <section>
        <h1>{title}</h1>
        <h2>{year}</h2>
        <img
          alt={`Poster for ${title}`}
          src={`/public/img/posters/${poster}`}
        />
        <p>{description}</p>
      </section>
      <div className="">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=1&amp;showinfo=0`}
          frameborder="0"
          allowFullscreen="0"
          title={`Trailer for ${title}`}
        />
      </div>
    </div>
  );
};

export default Details;
