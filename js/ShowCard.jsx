import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
  color: black;
  text-decoration: none;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

class ShowCard extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { poster, title, year, description, imdbID } = this.props;
    return (
      <Wrapper to={`/details/${imdbID}`} className="show-card">
        <Image
          src={`/public/img/posters/${poster}`}
          alt={`${title} Show Poster`}
        />
        <div>
          <h3>{title}</h3>
          <h4>({year})</h4>
          <p>{description}</p>
        </div>
      </Wrapper>
    );
  }
}

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
};

export default ShowCard;
