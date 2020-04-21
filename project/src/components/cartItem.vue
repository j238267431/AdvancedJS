<template>
        <div class="drop_cart">
            <img class="drop_cart_img" :src="cartItem.img" alt="product_1">
            <div class="cart_content">
                <p class="drop_cart_rebox">{{cartItem.product_name}}</p>
                <img src="../img/cart_stars.png" alt="stars">
                <p class="drop_cart_price">{{cartItem.price}}</p>
                <p class="drop_cart_rebox">количество {{cartItem.quantity}} шт</p>
            </div>
            <a href="#" @click="$emit('remove', cartItem)">
               <i class="fas fa-times-circle drop_cart_cross"></i>
               </a>
        </div>
</template>

<script>
export default {
  name: 'cartitem',
  props: { cartItem: Object },
};
</script>
