import { getPopular } from './API.js';
import { Count, creatHtml } from './DomManipulation.js';

(async () => {
  const movielist = await getPopular(9);
  creatHtml(movielist);
  Count(movielist);
})();
