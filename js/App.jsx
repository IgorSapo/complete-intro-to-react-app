import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';
import store from './store';

const FourOhFour = () => <h1>404</h1>;

const routedDetails = props => {
  const selectedShow = preload.shows.find(
    show => props.match.params.id === show.imdbID
  );
  return <Details {...selectedShow} {...props} />;
};

routedDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const routedSearch = props => <Search shows={preload.shows} {...props} />;

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={routedSearch} />
        <Route path="/details/:id" component={routedDetails} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Provider>
);

export default App;
