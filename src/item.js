import { grab, openModal } from './utills.js';

export default function itemDetails(mTitle, mDescription, mFig) {
  grab('_m_fig').src = mFig;
  grab('_m_title').innerText = mTitle;
  grab('_m_description').innerText = mDescription;
  openModal(0);
}