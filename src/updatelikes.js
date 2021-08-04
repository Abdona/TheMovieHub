import { getMovielike } from './InvolvementAPI.js';
import { grab } from './utills.js';

export default function showlikes(movieId) {
  const Likesarray = getMovielike(movieId);
  const movieLiked = Likesarray.find((obj) => obj.item_id === movieId);
  const DomLike = grab(movieId);
  DomLike.innerText = `${movieLiked.like}LIKE`;
}