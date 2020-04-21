const express = require('express');
const fs = require('fs')
const handler = require('./handler')
const router = express.Router()

router.get('/', (req, res) => {
  fs.readFile('./srv/db/userCart.json', 'utf-8', (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify({ result: 0, text: err }))
    } else {

      res.send(data)
    }
  })
})

router.post('/', (req, res) => {
   handler(req, res, 'add', './srv/db/userCart.json')
})

router.put('/:id', (req, res) => {
   handler(req, res, 'change', './srv/db/userCart.json')
})

router.delete('/', (req, res) => {
   console.log('delete')
   handler(req, res, 'del', './srv/db/userCart.json')

})
module.exports = router