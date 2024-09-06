import faker from 'faker';

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} item</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');

  // Assuming our container doesn't have an element
  // with id 'dev-cart'...
  if (el) {
    mount(el);
  }
}

export { mount };
