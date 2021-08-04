const fetch = require('cross-fetch');

const createMovie = async () => {
  const resp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'POST',
  });
  return resp.text();
};

const createMovielike = async (itemId) => {
  const data = JSON.stringify({ item_id: itemId });
  const resp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/{R28OTC179PUdUdjaPoCa/likes/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
    body: data,
  });
  return resp.text();
};

const getMovielike = async () => {
  const resp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/{R28OTC179PUdUdjaPoCa/likes/', {
  });
  return resp.text();
};

const createMoviecomment = async (id, userName, userComment) => {
  const data = JSON.stringify({ item_id: id, username: userName, comment: userComment });
  const resp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/{R28OTC179PUdUdjaPoCa/comments/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
    body: data,
  });
  return resp.text();
};

const getMoviecomment = async (itemId) => {
  const resp = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/{R28OTC179PUdUdjaPoCa/comments/item_id=${itemId}`, {
  });
  return resp.text();
};
(async () => {
  console.log(await createMovie());
})();
