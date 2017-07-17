import React from 'react';
import PropTypes from 'prop-types';
import Spinner from './Spinner';

class AsyncRoute extends React.Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    this.props.loadingPromise
      .then(module => {
        this.component = module.default;
        this.setState({ loaded: true });
      })
      .catch(error => error);
  }

  component = null;

  render() {
    if (this.state.loaded) {
      return <this.component {...this.props.props} />;
    }
    return <Spinner />;
  }
}

AsyncRoute.propTypes = {
  loadingPromise: PropTypes.shape({
    then: PropTypes.func.isRequired
  }).isRequired,
  props: PropTypes.shape({
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  }).isRequired
};

export default AsyncRoute;
