const grab = (e) => document.getElementById(e);

function openModal(modal, callback) {
  const element = document.getElementsByClassName('js-modal')[modal];
  const event = new CustomEvent('openModal');
  element.dispatchEvent(event);

  element.addEventListener('modalIsClose', () => { callback(); });
}

function create(e) {
  return document.createElement(e);
}

export { grab, openModal, create };