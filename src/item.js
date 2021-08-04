import { grab, openModal } from './utills.js';

export default function itemDetails(mTitle, mDescription, mFig) {
  const popwindow = grab('popwindow');
  const popMovietitle = grab('modal-title-1');
  popMovietitle.innerText = mTitle;
  popwindow.innerHTML = `<img src=${mFig} alt=${mTitle}><div class="text-component">
  <div class="padding-top-xs">
    <p id="_m_description">${mDescription}</p>
  </div>
</div>`;
  openModal(0);
}