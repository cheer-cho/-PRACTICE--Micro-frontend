import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    products += `<div>${i + 1}) ${name}</div>`;
  }

  el.innerHTML = products;
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// While DEFINITELY has an element with an id of 'dev-products'
// We want to immediately render our app into that element
if (process.env.NODE_ENV == 'development') {
  const el = document.querySelector('#dev-products');

  // Assuming our container doesn't have an element
  // with id 'dev-products'...
  if (el) {
    mount(el);
  }
}

//

export { mount };
