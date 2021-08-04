import getPopularmovies from '../__mocks__/imdb_mocks.js';
import { Count } from '../src/DomManipulation.js';

describe('Test Movie Counting Function', () => {
  test('API return a movie list consists of 10 movies', () => {
    const movieList = getPopularmovies();
    const movieListlength = Count(movieList);
    expect(movieListlength).toBe(10);
  });
});