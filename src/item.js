import { grab, openModal } from './utills.js';

export default function itemDetails(mTitle, mDescription, mFig) {
  const popwindow = grab('popwindow');
  const img = document.createElement('img');
  img.src = mFig;
  img.alt = mTitle;
  popwindow.prepend(img);
  grab('_m_title').innerText = mTitle;
  grab('_m_description').innerText = mDescription;
  openModal(0);
}