const grab = (e) => document.getElementById(e);

const openModal = (modal) => {
  const element = document.getElementsByClassName('js-modal')[modal];
  const event = new CustomEvent('openModal');
  element.dispatchEvent(event);
};

const create = (e) => document.createElement(e);
export { grab, create, openModal };