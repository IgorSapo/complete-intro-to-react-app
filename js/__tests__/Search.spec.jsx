import React from 'react';
import { shallow, render } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import store from '../store';
import { setSearchTerm } from '../actionCreators';
import Search, { Unwrapped as UnwrappedSearch } from '../Search';
import ShowCard from '../ShowCard';
import preload from '../../data.json';

describe('Search', () => {
  it('renders correctly', () => {
    const component = shallow(
      <UnwrappedSearch shows={preload.shows} searchTerm="" />
    );
    expect(component).toMatchSnapshot();
  });

  it('renders correct number of shows', () => {
    const component = shallow(
      <UnwrappedSearch shows={preload.shows} searchTerm="" />
    );
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it('renders correct number of items based on search term', () => {
    const searchWord = 'black';
    store.dispatch(setSearchTerm(searchWord));
    const component = render(
      <Provider store={store}>
        <MemoryRouter>
          <UnwrappedSearch shows={preload.shows} searchTerm={searchWord} />
        </MemoryRouter>
      </Provider>
    );

    // component
    //   .find('input')
    //   .simulate('change', { target: { value: searchWord } });

    const showCount = preload.shows.filter(show =>
      `${show.title} ${show.description}`
        .toLowerCase()
        .includes(searchWord.toLowerCase())
    );
    expect(component.find('.show-card').length).toEqual(showCount.length);
  });
});
