import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOhFour = () => <h1>404</h1>;

const routedDetails = props => {
  const selectedShow = preload.shows.find(
    show => props.match.params.id === show.imdbID
  );
  return <Details {...selectedShow} {...props} />;
};

const routedSearch = props => <Search shows={preload.shows} {...props} />;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={routedSearch} />
        <Route path="/details/:id" component={routedDetails} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
