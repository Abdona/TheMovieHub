import { getPopular } from './API.js';
import { Count, creatHtml } from './DomManipulation.js';

(async () => {
  const movielist = await getPopular(6);
  creatHtml(movielist);
  Count(movielist);
})();
