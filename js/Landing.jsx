import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h2>Video</h2>
    <input type="text" placeholder="Search" />
    <Link to="/search">or browse all</Link>
  </div>
);

export default Landing;