const myCart=[];
const myWishlist=[];

import createItem from './services/item.js';
import * as cartServices from './services/cart.js';

console.log("Seja Bem Vindo ao Carrinho de Compras ");

const item1= await createItem("mouse gamer", 1236.89, 2);
const item2= await createItem("teclado mecânico", 499.90, 2); 
const item3= await createItem("monitor 4k", 3499.99, 1);

await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);
await cartServices.addItem(myWishlist, item3);

await cartServices.removeItem(myCart, item1);

await cartServices.displayCart(myCart);

// await cartServices.deleteItem(myCart, item2.name);

await cartServices.sumValuesInCart(myCart);