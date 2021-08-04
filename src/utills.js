function grab(e) {
  return document.getElementById(e);
}

function openModal(modal) {
  const element = document.getElementsByClassName('js-modal')[modal];
  const event = new CustomEvent('openModal');
  element.dispatchEvent(event);
}

function create(e) {
  return document.createElement(e);
}
export { grab, create, openModal };