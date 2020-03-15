'use strict'

class Hamburger {
  constructor (size, stuffing) {
   this.size = size
   this.topping = stuffing
   this.price = null
   this.calories= null

  this.burgerArr = []
  this.toppingArr = []
  this._fetchBurgers()
  }

  _fetchBurgers(){
     this.burgerArr = [
        {name: 'small', price: 50, calories: 20},
        {name: 'big', price: 100, calories: 40}
     ]
  }


//   addTopping (topping) {
//     // Добавить добавку
//   }
//   removeTopping (topping) {
//     // Убрать добавку
//   }

  getSize(){
     let choosedBurger = document.getElementsByName('burger')
     for (let burger of choosedBurger){
        burger.addEventListener('click', (event) => {
         switch (event.toElement.value){
            case 'small': 
            this.price = +50
            this.calories = +20
            break
            case 'big':
           this.price = +100
           this.calories = +40
           break
         }
         this.getToppings(event.toElement.value)

        })
     }
    // Узнать размер гамбургера

  }

  getToppings (size) {
   let choosedTopping = document.getElementsByName('toppings')
   // this.price = null
   // this.calories = null
   for (let topping of choosedTopping){
      topping.addEventListener('click', (event) => {
      //  const hamburger = new Hamburger(size, event.toElement.value)
      switch(event.toElement.value){
         case 'cheese':
            this.price += 10
            this.calories += 20
            break
         case 'salad':
            this.price += 20
            this.calories += 5
            break
         case 'potato':
            this.price += 15
            this.calories += 10
            break
      }
      this.calculatePrice()
   })
 }
   
   // this.calculateCalories()
  // Получить список добавок
}

  calculatePrice () {
     console.log(` стоимость бургера ${this.price} калорийность ${this.calories}`)
    // Узнать цену
//   }
//   calculateCalories () {
   
    // Узнать калорийность
  }


}
//   getStuffing () {
//     // Узнать начинку гамбургера
//   }




const hamburger = new Hamburger()
hamburger.getSize()

