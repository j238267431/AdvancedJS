<template>
           <article class="product">
            <a :href="'/singlepage/'+item.id_product"><img alt="product_1" class="product__img" :src="'../'+item.img"></a>
            <div class="product__content">
                <a class="product__name" href="">{{item.product_name}}</a>
                <p class="product__price">{{item.price}} &#8381;</p>
            </div>
            <a @click.prevent="$emit('add', item)" class="product__add" href="">Add to Cart
            <img alt="white_cart" class="white_product_cart" src="../img/featured/white_cart.png">
        </a>
        </article>
</template>

<script>
export default {


   name: 'likealso',
   props: { item: Object },
   methods:{
      
   }
}

</script>