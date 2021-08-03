import { getPopular } from './API';
import creatHtml from './DomManipulation';

(async () => {
  const movielist = await getPopular(6);
  creatHtml(movielist);
})();
