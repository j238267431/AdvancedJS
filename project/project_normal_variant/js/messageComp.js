Vue.component('message', {
   data(){
      return{
         message: ''
      }
   },
   methods:{
      getMessage(){
         this.message = 'не удаётся выполнить запрос к серверу' 
      }
   },

   template:`
   <span>{{message}}</span>
   `
})