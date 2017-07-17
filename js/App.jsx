import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import preload from '../data.json';
import store from './store';
import AsyncRoute from './AsyncRoute';

const FourOhFour = () => <h1>404</h1>;

const AsyncSearch = props => (
  <AsyncRoute
    props={Object.assign({ shows: preload.shows }, props)}
    loadingPromise={import('./Search')}
  />
);

const AsyncLanding = props => (
  <AsyncRoute props={props} loadingPromise={import('./Landing')} />
);

const AsyncDetails = props => {
  const selectedShow = preload.shows.find(
    show => props.match.params.id === show.imdbID
  );
  return (
    <AsyncRoute
      props={Object.assign(selectedShow, props)}
      loadingPromise={import('./Details')}
    />
  );
};

AsyncDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

const App = () => (
  <Provider store={store}>
    <div className="app">
      <Switch>
        <Route exact path="/" component={AsyncLanding} />
        <Route path="/search" component={AsyncSearch} />
        <Route path="/details/:id" component={AsyncDetails} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Provider>
);

export default App;
