const fetch = require('cross-fetch');

const createMovie = async () => {
  const resp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/', {
    method: 'POST',
  });
  return resp;
};

(async () => {
  console.log(await createMovie());
})();
