import { getPopularposter, getPopulardetails } from './API';
import { it } from './item.js';
import { grab, create } from './utills';

export default function creatHtml(movielist) {
  movielist.forEach((movie) => {
    (async () => {
      const details = await getPopulardetails(movie.imdb_id);
      const movieposter = await getPopularposter(movie.imdb_id);
      const container = document.createElement('div');
      container.className = 'col-4';
      const img = document.createElement('img');
      img.className = 'width-100%';
      img.src = movieposter;
      const comment = document.createElement('button');
      comment.className = 'btn btn--primary width-100%';
      comment.addEventListener('click', () => { itemDetails(movie.title, details, movieposter); });
      container.append(img, comment);
      grab('moviesection1').appendChild(container);
    })();
  });
}