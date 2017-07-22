import axios from 'axios';
import { addAPIData } from './actionCreators';

const getAPIDetails = imdbID => dispatch =>
  axios
    .get(`http://localhost:3000/${imdbID}`)
    .then(response => dispatch(addAPIData(response.data)))
    .catch(error => console.error('axios error', error)); // eslint-disable-line no-console

export default getAPIDetails;
