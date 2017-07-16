import moxios from 'moxios';
import { setSearchTerm, addAPIData, getAPIDetails } from '../actionCreators';

const showdata = {
  rating: '0.6',
  title: 'Atlanta',
  year: '2008–2013',
  description: 'Two cousins, with different views on art versus commerce, on their way up through the Atlanta rap scene; "Earnest \'Earn\' Marks," an ambitious college drop-out and his estranged cousin, who suddenly becomes a star.',
  poster: 'a.jpg',
  imdbID: 'tt4288182',
  trailer: 'MpEdJ-mmTlY'
};

test('setSearchTerm', () => {
  expect(setSearchTerm('New York')).toMatchSnapshot();
});

test('addAPIData', () => {
  expect(addAPIData(showdata)).toMatchSnapshot();
});

test('getAPIDetails', done => {
  const dispatchMock = jest.fn();
  moxios.withMock(() => {
    getAPIDetails(showdata.imdbID)(dispatchMock);
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request
        .respondWith({
          status: 200,
          response: showdata
        })
        .then(() => {
          expect(request.url).toEqual(
            `http://localhost:3000/${showdata.imdbID}`
          );
          expect(dispatchMock).toBeCalledWith(addAPIData(showdata));
          done();
        });
    });
  });
});
