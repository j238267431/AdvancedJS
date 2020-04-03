const add = (cart, req) => {
  // console.log(req)
  cart.contents.push(req.body)
  return JSON.stringify(cart, null, 4)
}
const change = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.params.id)
  find.quantity += req.body.quantity
  return JSON.stringify(cart, null, 4)
}
const del = (cart, req) => {
  const find = cart.contents.find(el => el.id_product === +req.body.id_product)
  if (req.body.quantity > 1) {
    find.quantity--
  } else {
    // cart.contents.splice(cart.contents.indexOf(req.body), 0)
    // console.log(req.body) + ' ' + console.log(cart.contents.indexOf(req.body))
    // console.log(cart.contents)
    let index = cart.contents.findIndex(el => el.id_product === req.body.id_product)
    // console.log(index)
    cart.contents.splice(index, 1)
  }
  return JSON.stringify(cart, null, 4)
}
module.exports = {
  add,
  change,
  del
}
