const API =
  'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    searchLine: '',
    findItem: '',
    hideBlock: false,
    searchText: '',
    show: false,
    cart: [],
    imgCart: 'https://placehold.it/50x70',
    message: '',
    showMessage: false
  },
  computed: {
    searchItem () {
      let regExp = new RegExp(this.searchText, 'i')
      return this.products.filter(product => regExp.test(product.product_name))
    }
  },
  // methods: {
  //   getJson (url) {
  //     return fetch(url)
  //       .then(result => result.json())
  //       .catch(error => {
  //         console.log(error)
  //       })
  //   },

  methods: {
    // getJson (url) {
    //   return fetch(url)
    //     .then(result => result.json())
    //     .catch(error => {
    //       console.log(error)
    //     })
    // },

    getJson (url) {
      return fetch(url)
        .then(function (result) {
          return result.json()
        })
        .catch(error => {
          console.log(error)
        })
    },

    addProduct (product) {
      if (
        this.cart.find(cartProd => product.id_product === cartProd.id_product)
      ) {
        product.quantity++
      } else {
        Vue.set(product, 'quantity', 1)
        this.cart.push(product)
      }
    },
    removeProduct (product) {
      if (product.quantity > 1) {
        product.quantity--
      } else {
        this.cart.splice(this.cart.indexOf(product), 1)
        console.log(this.cart)
      }
    },

    test () {
      this.searchText = this.searchLine
    }
  },
  mounted () {
    this.getJson(`${API + this.catalogUrl}`).then(data => {
      if (data) {
        for (let el of data) {
          this.products.push(el)
        }
      } else {
        this.message = 'нет данных'
        this.showMessage = true
      }
    })
  }
})
