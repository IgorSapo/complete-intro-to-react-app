import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  payload: searchTerm
});

export const addAPIData = apiData => ({
  type: ADD_API_DATA,
  payload: apiData
});

export const getAPIDetails = imdbID => dispatch =>
  axios
    .get(`http://localhost:3000/${imdbID}`)
    .then(response => dispatch(addAPIData(response.data)))
    .catch(error => console.error('axios error', error));
