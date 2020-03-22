'use strict'

let text = `
One: 'Hi Mary.' 
Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
One: 'Not too bad. The weather is great isn't it?'
Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure.' Bye.'
`

// Задание 1
console.log(text.replace(/\'/g, '"'))
// Задание 2
console.log(text.replace(/([a-z]*: )\'(.+[\.\?]?)\'/gi, '$1"$2"'))

// Задание 3

class Form {
  constructor () {
    this.regExpName = new RegExp('^[a-z а-я]+$', 'i')
    this.regExpPhone = new RegExp('^\\+[0-9]\\([0-9]{3}\\)[0-9]{3}\-[0-9]{4}$')
    this.regExpEmail = new RegExp('^[a-z]+[.-]?[a-z]+?@[a-z]+.[a-z]{2}$', 'i')
    document.getElementById('form').addEventListener('click', event => {
      if (event.target.tagName === 'INPUT') {
        const input = new Input(event.target.attributes[0].value)
      }
    })
  }
}

class Input {
  constructor (id) {
    this.inputField = document.getElementById(`${id}`)
    this.message = document.getElementById(`message-${id}`)
    this.addEvent(id)
    this.regExp = ''
  }

  addEvent (id) {
    this.inputField.addEventListener('blur', () => {
      this.eventHandler(id)
    })
  }

  eventHandler (id) {
    let text = this.inputField.value
    this.chooseRegExp(id)
    if (!this.isTextCorrect(text)) {
      this.showMessage()
      this.makeBorderRed()
      this.chooseStatusFalse(id)
    } else {
      this.hideMessage()
      this.makeBorderBlack()
      this.chooseStatus(id)
    }
  }

  chooseStatusFalse (id) {
   switch (id) {
     case 'name':
       button.statusName = false
       break
     case 'phone':
       button.statusPhone = false
       break
     case 'email':
       button.statusEmail = false
       break
   }
 }

  chooseStatus (id) {
    switch (id) {
      case 'name':
        button.statusName = true
        break
      case 'phone':
        button.statusPhone = true
        break
      case 'email':
        button.statusEmail = true
        break
    }
  }

  chooseRegExp (id) {
    switch (id) {
      case 'name':
        this.regExp = form.regExpName
        break
      case 'phone':
        this.regExp = form.regExpPhone
        break
      case 'email':
        this.regExp = form.regExpEmail
        break
    }
  }

  isTextCorrect (text) {
    return this.regExp.test(text)
  }

  showMessage () {
    this.message.classList.remove('hidden')
  }

  hideMessage () {
    this.message.classList.add('hidden')
  }

  makeBorderRed () {
    this.inputField.classList.remove('input')
  }

  makeBorderBlack () {
    this.inputField.classList.add('input')
  }
}

class Button {
  constructor () {
    this.button = document.getElementById('button')
    this.statusName = false
    this.statusPhone = false
    this.statusEmail = false
    this.addEvent()
  }
  addEvent () {
    this.button.addEventListener('click', () => {
      this.areInputsCorrect()
    })
  }
  areInputsCorrect () {
    if (this.statusName && this.statusPhone && this.statusEmail) {
      alert('данные отправлены')
    } else {
      alert('данные введены не корректно')
    }
  }
}
const form = new Form()
const button = new Button()
