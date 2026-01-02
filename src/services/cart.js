// ações que o carrinho pode realizar

async function addItem(userCart, item){
    // adiciona elemento a um vet
    userCart.push(item);
}

async function sumValuesInCart(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nO valor total do carrinho é R$ ${result.toFixed(2)}`);
}

async function deleteItem(userCart, name){
  const index = userCart.findIndex((item) => item.name === name);
  if( index !== -1){
    userCart.splice(index, 1);
  }
}

async function displayCart(userCart){
    console.log("\nCart List: ");
    userCart.forEach((item, index) =>{
        console.log(`${index +1}. ${item.name} - R$ ${item.price} x ${item.quantity} = R$ ${item.subtotal()}`);
    })
}

async function removeItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    // console.log(indexFound);
    if(indexFound === -1){
        console.log("item not found");
        return;
    }

    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1);
    }

}

// async function removeItem(userCart, index){
//     const deletedIndex = index - 1; // to fix user-friendly index
//     if(index >=0  && index < userCart.length){
//         userCart.splice(deletedIndex, 1);
//     }
// }

export { 
    addItem, 
    sumValuesInCart, 
    deleteItem, 
    removeItem,
    displayCart
 };