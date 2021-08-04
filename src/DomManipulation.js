import { getPopularposter, getPopulardetails } from './API.js';
import itemDetails from './item.js';

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
      divitem.innerHTML = `<img src=${movieposter} alt=${movie.title}><br><h6>${movie.title}</h6><br>`;
      divitem.append(detailButt, commentButt);
      moviesection.appendChild(divitem);
    })();
  });
}

export function headerMoviecount(movieLength) {
  const spanTitle = document.getElementById('title');
  spanTitle.innerText = `Movies (${movieLength})`;
}

export function Count(movielist) {
  return movielist.length;
}