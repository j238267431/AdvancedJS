<template>
   <div class="drop">
      <div class="drop__flex">
         <h3 class="drop__h3">Men</h3>
         <ul class="drop__ul">
               <li v-for="category of $store.state.arrMen" :key="category.category"><a href="#" class="drop__link">{{category.category}}</a></li>
         </ul>

      </div>
      <div class="drop__flex">
         <h3 class="drop__h3">Women</h3>
         <ul class="drop__ul">
               <li v-for="category of $store.state.arrWomen" :key="category.category"><a href="#" class="drop__link">{{category.category}}</a></li>

         </ul>
         <h3 class="drop__h3">Men</h3>
         <ul class="drop__ul">
               <li><a href="#" class="drop__link">Dresses</a></li>
               <li><a href="#" class="drop__link">Tops</a></li>
               <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
         </ul>
      </div>
      <div class="drop__flex">
         <h3 class="drop__h3">Men</h3>
         <ul class="drop__ul">
               <li><a href="#" class="drop__link">Dresses</a></li>
               <li><a href="#" class="drop__link">Tops</a></li>
               <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
               <li><a href="#" class="drop__link">Jackets/Coats</a></li>
         </ul>
         <a href="#"><img class="drop__picture" src="img/super_sale.png" alt="super sale"></a>
      </div>
   </div>
</template>