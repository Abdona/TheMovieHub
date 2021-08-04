import { getPopular } from './API.js';
import { Count, creatHtml } from './DomManipulation.js';

(async () => {
  const movielist = await getPopular(6);
  creatHtml(movielist);
  Count(movielist);
})();

// console.log([{ name: 'ahmed', age: '20' }, { name: 'mohamed', age: '25' }, { name: 'samah', age: '30' }].find((obj) => obj.name === 'ahmed'));