const fs = require('fs')
const cart = require('./cart')

const sHandler = (req, res, text, file, action) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
    const cartList = JSON.parse(data)
    let findChange = cartList.contents.find(el => el.id_product === +req.params.id)
    fs.readFile(file, 'utf-8', (err, data) => {
      const list = JSON.parse(data)
      let date = new Date()
      if (action === 'change') {
        list.push({ status: text, name: findChange.product_name, date: date })
      } else {
        list.push({ status: text, name: req.body.product_name, date: date })
      }
      fs.writeFile(file, JSON.stringify(list), err => {})
    })
  })
}
module.exports = sHandler
