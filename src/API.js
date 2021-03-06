export const getPopular = async (movieNumber) => {
  const resp = await fetch('https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-popular-movies&page=1&year=2020', {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '646b9d635fmsh5798a4d83b59a18p1a2a7djsn49980f17b348',
      'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
    },
  });
  const respJson = await resp.json();
  return respJson.movie_results.slice(0, movieNumber);
};

export const getPopularposter = async (movieid) => {
  const resp = await fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movies-images-by-imdb&imdb=${movieid}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '646b9d635fmsh5798a4d83b59a18p1a2a7djsn49980f17b348',
      'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
    },
  });
  const respJson = await resp.json();
  return respJson.poster;
};

export const getPopulardetails = async (movieid) => {
  const resp = await fetch(`https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-movie-details&imdb=${movieid}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '646b9d635fmsh5798a4d83b59a18p1a2a7djsn49980f17b348',
      'x-rapidapi-host': 'movies-tvshows-data-imdb.p.rapidapi.com',
    },
  });
  const respJson = await resp.json();
  return respJson.description;
};