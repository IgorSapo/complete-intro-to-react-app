import React from 'react';
import { shallow } from 'enzyme';
import Search from '../Search';
import ShowCard from '../ShowCard';
import preload from '../../data.json';

describe('Search', () => {
  it('renders correctly', () => {
    const component = shallow(<Search />);
    expect(component).toMatchSnapshot();
  });

  it('renders correct number of shows', () => {
    const component = shallow(<Search />);
    expect(component.find(ShowCard).length).toEqual(preload.shows.length);
  });

  it('renders correct number of items based on search term', () => {
    const searchWord = 'black';
    const component = shallow(<Search />);

    component
      .find('input')
      .simulate('change', { target: { value: searchWord } });

    const showCount = preload.shows.filter(show =>
      `${show.title} ${show.description}`
        .toLowerCase()
        .includes(searchWord.toLowerCase())
    );
    expect(component.find(ShowCard).length).toEqual(showCount.length);
  });
});
