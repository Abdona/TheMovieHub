import { grab, openModal, dspCommentsLength } from './utills.js';
import { getMoviecomment, createMoviecomment } from './InvolvementAPI.js';

export default async function itemDetails(mTitle, mDescription, mFig, mId) {
  const popwindow = grab('popwindow');
  const popMovietitle = grab('modal-title-1');

  popMovietitle.innerText = mTitle;
  popwindow.innerHTML = `<img src=${mFig} alt=${mTitle}><div class="text-component">
    <div class="padding-top-xs">
      <p id="_m_description">${mDescription}</p>
    </div>
  </div>`;

  getMoviecomment(mId).then((data) => {
    const comments = JSON.parse(data);
    if (comments.length !== undefined) {
      const commentsSection = grab('_comments');
      commentsSection.innerHTML = '';
      grab('_comments_length').innerText = dspCommentsLength(comments);

      comments.forEach((element) => {
        const template = document.createElement('template');
        template.innerHTML = `<li>
        <span>${element.creation_date}</span>
        <span>${element.username}: </span>
        <span>${element.comment}</span>
      </li>`;
        commentsSection.appendChild(template.content.firstChild);
      });
    }
  });

  // eslint-disable-next-line no-use-before-define
  document.getElementById('_btn_comment').addEventListener('click', myFunction);

  function removeHandler() {
    // eslint-disable-next-line no-use-before-define
    grab('_btn_comment').removeEventListener('click', myFunction);
  }

  function myFunction(e) {
    e.preventDefault();
    const name = grab('_txt_name');
    const comment = grab('_txt_comment');

    createMoviecomment(mId, name.value, comment.value).then(() => {
      getMoviecomment(mId).then((data) => {
        name.value = '';
        comment.value = '';

        const comments = JSON.parse(data);
        const commentsSection = grab('_comments');
        commentsSection.innerHTML = '';

        grab('_comments_length').innerText = comments.length;

        comments.forEach((element) => {
          const template = document.createElement('template');
          template.innerHTML = `<li>
            <span>${element.creation_date}</span>
            <span>${element.username}: </span>
            <span>${element.comment}</span>
          </li>`;
          commentsSection.appendChild(template.content.firstChild);
        });
      });
    });
  }

  openModal(0, () => {
    grab('_btn_comment').removeEventListener('click', removeHandler());
  });
}