import { getPopular } from './API.js';
import { Count, creatHtml, headerMoviecount } from './DomManipulation.js';

(async () => {
  const movielist = await getPopular(6);
  creatHtml(movielist);
  headerMoviecount(Count(movielist));
})();
