export const createMovielike = async (itemId) => {
  const data = JSON.stringify({ item_id: itemId });
  const resp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pk9RMX2Es1GYRfVPhxJy/likes/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
    body: data,
  });
  return resp.text();
};

export const getMovielike = async () => {
  const resp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pk9RMX2Es1GYRfVPhxJy/likes/', {
  });
  return resp.text();
};

export const createMoviecomment = async (id, userName, userComment) => {
  const data = JSON.stringify({ item_id: id, username: userName, comment: userComment });
  const resp = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pk9RMX2Es1GYRfVPhxJy/comments/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; Charset=UTF-8',
    },
    body: data,
  });
  return resp.text();
};

export const getMoviecomment = async (itemId) => {
  const resp = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/pk9RMX2Es1GYRfVPhxJy/comments?item_id=${itemId}`, {
  });
  return resp.text();
};