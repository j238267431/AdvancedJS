const API =
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

// Переделать в ДЗ
// let getRequest = (url, cb) => {
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', url, true);
//   xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//       if (xhr.status !== 200) {
//         console.log('Error');
//       } else {
//         cb(xhr.responseText);
//       }
//     }
//   };
//   xhr.send();
// };

// getRequest(API, (data) => {
//   console.log(data)
// })

// Задание 1 Promise ES5

// const myPromise = url => {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest()
//     xhr.open('GET', url, true)
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4) {
//         if (xhr.status == 200) {
//           resolve(xhr.responseText)
//         } else {
//           reject('Error!')
//         }
//       }
//     }
//     xhr.send()
//   })
// }

// const resolve = data => {
//   console.log(JSON.parse(data))
// }
// const reject = err => {
//   console.log(err)
// }

// myPromise(`${API}/catalogData.json`)
//   .then(resolve)
//   .catch(reject)

// Задание 1 Promise ES6

// fetch(`${API}/catalogData.json`).then((result) => result.json()).then((data) => {
//   console.log(data)
//   }).catch((err) => {
//      console.log(err)
// })

class ProductList {
  constructor (container = '.products') {
    this.container = container
    this.goods = []
    this.allProducts = []
    // this._fetchProducts();
    this._getProducts().then(data => {
      this.goods = [...data]
      this.render()
    })
    this.inCartGoods = []
  }

  // _fetchProducts() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     this.goods = JSON.parse(data);
  //     this.render();
  //     console.log(this.goods);
  //   });
  // }

  addClickHandler () {
    this.buyButton = document.getElementsByClassName('buy-btn')
    for (let element of this.buyButton) {
      element.addEventListener('click', event => {
        let id = +event.target.parentElement.parentElement.attributes[1].value
        for (let product of this.goods) {
          if (product.id_product === id) {
            this.inCartGoods.push(product)
            const newCartItem = new CartItem(product)
            const cart = new Cart(newCartItem.render(newCartItem), product)
            this.addEventToDeleteBtn(cart)
          }
        }
      })
    }
  }
  addEventToDeleteBtn (cart) {
    for (let deleteBtn of cart.deleteBtn) {
      deleteBtn.addEventListener('click', event => {
        this.removeItemFromCart(cart)
      })
    }
  }

  removeItemFromCart (cart) {
    let idToDelete = +event.toElement.attributes[1].value
    for (let i = 0; i < cart.cartBlock.children.length; i++) {
      if (idToDelete === +cart.cartBlock.children[i].attributes[1].value) {
        cart.cartBlock.children[i].remove()
      }
    }
  }

  _getProducts () {
    return fetch(`${API}/catalogData.json`)
      .then(result => result.json())
      .catch(error => {
        console.log('Error!', error)
      })
  }

  calcSum () {
    return this.allProducts.reduce((accum, item) => (accum += item.price), 0)
  }

  render () {
    const block = document.querySelector(this.container)
    for (let product of this.goods) {
      const productObject = new ProductItem(product)
      this.allProducts.push(productObject)
      block.insertAdjacentHTML('beforeend', productObject.render())
    }
    this.addClickHandler()
  }
}

class ProductItem {
  constructor (product, img = 'https://placehold.it/200x150') {
    this.title = product.product_name
    this.price = product.price
    this.id = product.id_product
    this.img = img
  }

  render () {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
  }
}

class Cart {
  constructor (product, inCart) {
    this.cartBtn = document.getElementsByClassName('btn-cart')[0]
    this.cartBlock = document.getElementsByClassName('cart')[0]
    this.renderCart(product)
    this.deleteBtn = document.querySelectorAll('#delete')
    this.cartButtonEventHandler()
    this.cartStatus = 'closed'
  }
  renderCart (cartItem) {
    if (this.isProductInCart()) {
      this.cartBlock.insertAdjacentHTML('beforeend', cartItem)
    }
  }
  cartButtonEventHandler () {
    this.cartBtn.addEventListener('click', () => {
      this.showGoodsInCart()
    })
  }
  showGoodsInCart () {
    if (this.cartIsClosed()) {
      this.cartBlock.classList.remove('hidden')
      this.cartStatus = 'open'
    } else {
      this.cartBlock.classList.add('hidden')
      this.cartStatus = 'closed'
    }
  }
  isProductInCart () {
    // for (let check of this.cartBlock.children){
    return true
    // }
  }
  cartIsClosed () {
    return this.cartStatus === 'closed'
  }
}
class CartItem {
  constructor (product) {
    this.title = product.product_name
    this.price = product.price
    this.id = product.id_product
  }
  render () {
    return `<div class = "cart-item" data-id = ${this.id}>
    ${this.title} ${this.price} 
    <button id = "delete"  data-id = ${this.id}>удалить</button>
    </div>`
  }
}

const productList = new ProductList()
// const cart = new Cart()

// cart.deleteBtn.addEventListener('click', () => {

// })
