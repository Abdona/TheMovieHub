import { getMovielike } from './InvolvementAPI.js';
import { grab } from './utills.js';

export default async function showlikes(movieId) {
  const resp = await getMovielike(movieId);
  const likesArray = JSON.parse(resp);
  const likedMovie = likesArray.find((obj) => obj.item_id === movieId);
  const DomLike = grab(movieId);
  DomLike.innerText = `${likedMovie.likes} Like ( s )`;
}