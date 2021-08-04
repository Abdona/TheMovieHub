import { getPopular } from './API';
import { Count, creatHtml, headerMoviecount } from './DomManipulation';

(async () => {
  const movielist = await getPopular(6);
  creatHtml(movielist);
  headerMoviecount(Count(movielist));
})();
