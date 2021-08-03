import { getPopularposter } from './API';

export default function creatHtml(movielist) {
  const moviesection = document.getElementById('moviesection');
  moviesection.classList.add('flex');
  moviesection.classList.add('flex-column');
  moviesection.style.padding = '110px';
  moviesection.innerHTML = '';
  const movieRowone = document.createElement('div');
  movieRowone.setAttribute('id', 'row1');
  movieRowone.classList.add('flex');
  movieRowone.classList.add('gap-xxxl');
  const movieRowtwo = document.createElement('div');
  movieRowtwo.setAttribute('id', 'row2');
  movieRowtwo.classList.add('flex');
  movieRowtwo.classList.add('gap-xxxl');
  movielist.forEach((movie) => {
    (async () => {
      const movieposter = await getPopularposter(movie.imdb_id);
      if (movieRowone.querySelectorAll('div').length !== 3) {
        const divitem = document.createElement('div');
        divitem.innerHTML = `<img src=${movieposter} alt=${movie.title}><br><h6>${movie.title}</h6><br><button class="btn btn--primary"
          aria-controls="modal-name-1">Comment</button>`;
        movieRowone.appendChild(divitem);
      } else if (movieRowtwo.querySelectorAll('div').length !== 3) {
        const divitem = document.createElement('div');
        divitem.innerHTML = `<img src=${movieposter} alt=${movie.title}><br><h6>${movie.title}</h6><br><button class="btn btn--primary"
          aria-controls="modal-name-1">Comment</button>`;
        movieRowtwo.appendChild(divitem);
      }
    })();
  });
  const Break1 = document.createElement('br');
  const Break2 = document.createElement('br');
  moviesection.appendChild(movieRowone);
  moviesection.appendChild(Break1);
  moviesection.appendChild(Break2);
  moviesection.appendChild(movieRowtwo);
}