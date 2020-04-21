<template>
   <div class = "header_right">
        <div class="drop_cart_block">

                <a  href="/shippingcart">
                   <img class="header__cart" src="../img/cart.png" alt="cart">
                   </a>

            <div class = "cart__items">
            <span v-if="!getCartData.contents">корзина пуста</span>
            <cartitem
                v-for="item of getCartData.contents"
                :key="item.id_product"
                :cartItem="item"
                @remove="remove"
                >

            </cartitem>
            </div>

        </div>

        <a class="button text_shadow box_shadov_click" href="#">My Account</a>
        <img class="header_arrow" src="../img/arrow_down.png" alt=">">
</div>
</template>


<script>

import cartitem from '@/components/cartItem.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      cartItems: [],
    };
  },
  name: 'cart',
  components: { cartitem },
  methods: {
    ...mapActions(['fetchCartData']),
    remove(item) {
      this.$store.dispatch('deleteJson', {item: item});
      this.cartItems = this.$store.state.cartData.contents;
      if (item.quantity > 1) {
          item.quantity--;
      } else {
      this.cartItems.splice(this.cartItems.indexOf(item), 1);
      }
    },
  },
  computed: {
    ...mapGetters(['getCartData']),
  },
  mounted() {
    this.fetchCartData();
  },
};
</script>
