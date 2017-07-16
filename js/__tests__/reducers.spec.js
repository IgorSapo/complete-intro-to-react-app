import reducers from '../reducers';

test('SET_SEARCH_TERM', () => {
  let state;
  state = reducers(
    { searchTerm: '', apiData: {} },
    { type: 'SET_SEARCH_TERM', payload: 'black' }
  );
  expect(state).toEqual({ searchTerm: 'black', apiData: {} });
});

test('ADD_API_DATA', () => {
  const state = reducers(
    { searchTerm: '', apiData: {} },
    {
      type: 'ADD_API_DATA',
      payload: {
        rating: '8.4',
        title: 'Homeland',
        year: '2011–',
        description: 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil.',
        poster: 'h.jpg',
        imdbID: 'tt1796960',
        trailer: 'KyFmS3wRPCQ'
      }
    }
  );
  expect(state).toEqual({
    searchTerm: '',
    apiData: {
      tt1796960: {
        rating: '8.4',
        title: 'Homeland',
        year: '2011–',
        description: 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil.',
        poster: 'h.jpg',
        imdbID: 'tt1796960',
        trailer: 'KyFmS3wRPCQ'
      }
    }
  });
});

test('ADD_API_DATA with two shows', () => {
  let state;
  state = reducers(
    {
      searchTerm: '',
      apiData: {
        tt1796960: {
          rating: '8.4',
          title: 'Homeland',
          year: '2011–',
          description: 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil.',
          poster: 'h.jpg',
          imdbID: 'tt1796960',
          trailer: 'KyFmS3wRPCQ'
        }
      }
    },
    {
      type: 'ADD_API_DATA',
      payload: {
        rating: '0.7',
        title: 'Master of None',
        year: '2015–',
        description: 'The personal and professional life of Dev, a 30-year-old actor in New York.',
        poster: 'mon.jpg',
        imdbID: 'tt4635276',
        trailer: '6bFvb3WKISk'
      }
    }
  );
  expect(state).toEqual({
    searchTerm: '',
    apiData: {
      tt1796960: {
        rating: '8.4',
        title: 'Homeland',
        year: '2011–',
        description: 'A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil.',
        poster: 'h.jpg',
        imdbID: 'tt1796960',
        trailer: 'KyFmS3wRPCQ'
      },
      tt4635276: {
        rating: '0.7',
        title: 'Master of None',
        year: '2015–',
        description: 'The personal and professional life of Dev, a 30-year-old actor in New York.',
        poster: 'mon.jpg',
        imdbID: 'tt4635276',
        trailer: '6bFvb3WKISk'
      }
    }
  });
});
