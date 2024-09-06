import { mount as mountProductsIndex } from 'products/ProductsIndex';
import { mount as mountCartShow } from 'cart/CartShow';

console.log('container');

mountProductsIndex(document.querySelector('#my-products'));
mountCartShow(document.querySelector('#my-cart'));
