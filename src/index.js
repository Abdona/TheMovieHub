import { getPopular } from './API.js';
import { Count, creatHtml, headerMoviecount } from './DomManipulation.js';

(async () => {
  const movielist = await getPopular(12);
  creatHtml(movielist);
  headerMoviecount(Count(movielist));
})();
