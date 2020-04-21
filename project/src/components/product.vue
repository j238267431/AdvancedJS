<template>
      <article class="product">
      <a :href="singlepage+product.id_product"><img class="product__img" :src="product.img" alt="product_1"></a>
      <div class="product__content">
         <a href="" class="product__name">{{product.product_name}}</a>
         <p class="product__price">{{ product.price }}</p>
      </div>
      <button href="#" class="product__add" @click="$emit('add', product)">Add to Cart
         <img class="white_product_cart" src="img/featured/white_cart.png" alt="white_cart">
      </button>
   </article>
</template>


<script>
export default {
   data() {
      return {
         singlepage: "/singlepage/"
      }
   },
   name: 'product',
   props: { product: Object },
}
</script>