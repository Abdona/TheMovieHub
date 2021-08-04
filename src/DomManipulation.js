import { getPopularposter, getPopulardetails } from './API.js';
import itemDetails from './item.js';
import { createMovielike } from './InvolvementAPI.js';
import showlikes from './updatelikes.js';

const heartsvg = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>';
export function creatHtml(movielist) {
  const moviesection = document.getElementById('moviesection');
  const headerDropmenu = document.getElementById('moviedropmenu');
  moviesection.innerHTML = '';
  movielist.forEach((movie) => {
    (async () => {
      const details = await getPopulardetails(movie.imdb_id);
      const movieposter = await getPopularposter(movie.imdb_id);
      const divitem = document.createElement('div');
      divitem.className = 'col-4';
      const dropMenuli = document.createElement('li');
      const detailButt = document.createElement('button');
      detailButt.className = 'btn btn--primary margin-right-md';
      detailButt.innerText = 'Details';
      detailButt.addEventListener('click', () => { itemDetails(movie.title, details, movieposter); });
      const commentButt = document.createElement('button');
      commentButt.className = 'btn btn--primary';
      commentButt.innerText = 'Comment';
      dropMenuli.innerHTML = `<li><a href="#0" class="f-header__dropdown-link">${movie.title}</a></li>`;
      headerDropmenu.appendChild(dropMenuli);
      divitem.innerHTML = `<img src=${movieposter} alt=${movie.title}><br><h6 class='float-left'>${movie.title}</h6><i class='float-right'>${heartsvg}</i><br><div><p id=${movie.imdb_id}></p></div>`;
      divitem.querySelector('i').addEventListener('click', async () => { await createMovielike(movie.imdb_id); await showlikes(movie.imdb_id); });
      divitem.append(detailButt, commentButt);
      moviesection.appendChild(divitem);
      await showlikes(movie.imdb_id);
    })();
  });
}

export function Count(movielist) {
  const spanTitle = document.getElementById('title');
  spanTitle.innerText = `Movies (${movielist.length})`;
}