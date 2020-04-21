const express = require('express')
const fs = require('fs')
const handler = require('./handler')
const sHandler = require('./sHandler')
const router = express.Router()

router.get('/', (req, res) => {
  fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
    } else {
      res.send(data)
      // console.log(data)
    }
  })
})

router.post('/', (req, res) => {
  handler(req, res, 'add', './server/db/userCart.json')
  /**
   * stats update
   */
  sHandler(req, res, 'добавлено', './server/db/stats.json', 'add')

})

// localhost:3000/api/cart/123 // req.params.id
// localhost:3000/api/cart/?var1='sfsf'&var2='ada' // req.query
router.put('/:id', (req, res) => {
  handler(req, res, 'change', './server/db/userCart.json')
  sHandler(req, res, 'изменено', './server/db/stats.json', 'change')

  // fs.readFile('./server/db/userCart.json', 'utf-8', (err, data) => {
  //   const cartList = JSON.parse(data)

  //   let findChange = cartList.contents.find(el => el.id_product === +req.params.id)
  //   fs.readFile('./server/db/stats.json', 'utf-8', (err, data) => {
  //     const list = JSON.parse(data)
  //     let date = new Date()
  //     list.push({
  //       status: 'изменено',
  //       name: findChange.product_name,
  //       date: date
  //     })
  //     fs.writeFile('./server/db/stats.json', JSON.stringify(list), err => {})
  //   })
  // })

})
router.delete('/', (req, res) => {
  handler(req, res, 'del', './server/db/userCart.json')
  sHandler(req, res, 'удалено', './server/db/stats.json', 'add')
})

module.exports = router
