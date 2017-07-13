import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const ShowCard = ({ poster, title, year, description }) => (
  <Wrapper>
    <Image src={`/public/img/posters/${poster}`} alt={`${title} Show Poster`} />
    <div>
      <h3>{title}</h3>
      <h4>({year})</h4>
      <p>{description}</p>
    </div>
  </Wrapper>
);

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
};

export default ShowCard;
