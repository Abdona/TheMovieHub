import { getPopular } from './API';
import { Count, creatHtml } from './DomManipulation';

(async () => {
  const movielist = await getPopular(6);
  creatHtml(movielist);
  Count(movielist);
})();
