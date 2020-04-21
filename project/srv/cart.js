const add = (cart, req) => {
  cart.contents.push(req.body);
  cartAmmount(cart)
  return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
  
  console.log(cart)
  
  const find = cart.contents.find((el) => el.id_product === req.body.id_product);
  // console.log(find)
  find.quantity++
  cartAmmount(cart)
  return JSON.stringify(cart, null, 4);
};
const del = (cart, req) => {
  if (req.body[1] === 'clear') {
    cart.contents = []
    cart.amount = 0
    console.log(cart)
    return JSON.stringify(cart, null, 4);
  } else {

  if (req.body.quantity > 1) {
    const find = cart.contents.find((el) => el.id_product === req.body.id_product);
    find.quantity --;
    cartAmmount(cart)
  } else {
    cart.contents.splice(cart.contents.findIndex((el) => el.id_product === req.body.id_product), 1);
    cartAmmount(cart)
  }
  return JSON.stringify(cart, null, 4);
}

};

const cartAmmount = (cart) => {
   cart.amount = cart.contents.reduce((accum, item) => accum += item.price * item.quantity, 0);
}

const clear = (cart, req) => {
  return {newCart: JSON.stringify({contents: []}, null, 4)}
}

module.exports = {
  add,
  change,
  del,
  clear,
};

