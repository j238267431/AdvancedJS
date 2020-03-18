'use strict'

class Hamburger {
  constructor () {
    this.burgerPrice = null
    this.burgerFat = null
    this.toppingPrice = null
    this.toppingFat = null
    this.stuffingPrice = null
    this.stuffingFat = null
    this.toppingButton = document.getElementById('toppings')
    this.message = document.getElementsByClassName('message')[0]
    this.costSpan = document.getElementById('cost')
    this.fatSpan = document.getElementById('fat')
    //  this.burgerSize = this.getSize()
  }

  getSize () {
    let choosedBurger = document.getElementsByName('burger')
    for (let burger of choosedBurger) {
      burger.addEventListener('click', event => {
        this.burgerPrice = +event.toElement.dataset.cost
        this.burgerFat = +event.toElement.dataset.fat
      //   this.calculatePrice()
      //   this.calculateCalories()
        this.toppingButton.classList.remove('hide')
        this.showMessage()
      })
    }
    // Узнать размер гамбургера
  }

  getToppings () {
    let choosedTopping = document.getElementsByName('toppings')
    for (let topping of choosedTopping) {
      topping.addEventListener('click', event => {
        this.toppingPrice = +event.toElement.dataset.cost
        this.toppingFat = +event.toElement.dataset.fat
      //   this.calculatePrice()
      //   this.calculateCalories()
      this.showMessage()
      })
    }

    // this.calculateCalories()
    // Получить список добавок
  }

  calculatePrice (price) {
   //  console.log(
      return this.burgerPrice +
        this.toppingPrice +
        this.stuffingPrice
   //  )
    // Узнать цену
  }
  calculateCalories (fat) {
   //  console.log(
      return this.burgerFat +
        this.toppingFat +
        this.stuffingFat
   //  )
    //  Узнать калорийность
  }

  getStuffing () {
    let choosedStuffing = document.getElementsByName('stuffing')
    for (let stuffing of choosedStuffing) {
      stuffing.addEventListener('click', () => {
        this.stuffingPrice = null
        this.stuffingFat = null
        for (let checked of choosedStuffing) {
          if (checked.checked) {
            this.stuffingPrice += +checked.dataset.cost
            this.stuffingFat += +checked.dataset.fat
          }
        }
      //   this.calculatePrice()
      //   this.calculateCalories()
      this.showMessage()
      })
    }
    // Узнать начинку гамбургера
  }

  showToppings () {
    this.toppingButton.addEventListener('click', () => {
      let blockToppings = document.getElementsByTagName('body')
      if (this.toppingButton.innerText === 'выбрать начинки') {
        blockToppings[0].children[2].classList.remove('hide')
        blockToppings[0].children[3].classList.remove('hide')
        this.toppingButton.innerText = 'скрыть начинки'
      } else {
        blockToppings[0].children[2].classList.add('hide')
        blockToppings[0].children[3].classList.add('hide')
        this.toppingButton.innerText = 'выбрать начинки'
      }
    })
  }
  showMessage(){
   this.costSpan.innerText = ''
   this.fatSpan.innerText = ''
     this.costSpan.insertAdjacentHTML('beforeend', this.calculatePrice())
     this.fatSpan.insertAdjacentHTML('beforeend', this.calculateCalories())
  }
  getMessage(){
     `<p>${this.calculatePrice}</p>`
  }
}
const hamburger = new Hamburger()
hamburger.getSize()
hamburger.getToppings()
hamburger.getStuffing()
hamburger.showToppings()
// hamburger.isBurgerChoosed()
