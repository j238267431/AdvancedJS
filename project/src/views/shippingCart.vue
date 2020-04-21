<template>
<div>
   <div class="new_arrivals_sector">
    <div class="new_arrivals">new arrivals</div>
    <ul class="bread_crumbs">
        <li><a class="bread_home bread_link" href="index.html">home/</a></li>
        <li><a class="bread_men bread_link" href="men.html">men/</a></li>
        <li><a class="bread_new bread_link" href="#">new arrivals</a></li>
    </ul>
</div>
<table class="center cart_table">
    <tr class="cart_headers">
        <th class="cart_headers_th" width="517px">Product Details</th>
        <th class="cart_headers_th">unite Price</th>
        <th class="cart_headers_th">Quantity</th>
        <th class="cart_headers_th">shipping</th>
        <th class="cart_headers_th">Subtotal</th>
        <th class="cart_headers_th">ACTION</th>
    </tr>

    <cartItemPage v-for="item of getCartData.contents" :key="item.id_product" :item="item" @remove="remove"/>
      
</table> 

<section class="cart_buttons center">
    <a @click.prevent="clear" href="#">CLEAR SHOPPING CART</a>
    <a href="/">continue shopping</a>
</section>

<section class="cart_address center">
    <div class="cart_address_first_block cart_address_block">
        <h3>shipping address</h3>
        <div class="cart_address_shipping" style="margin-top: 20px">
            <select class="cart_address_select">
                <option>Bangladesh</option>
                <option>Bangladesh</option>
                <option>Bangladesh</option>
                <option>Bangladesh</option>
                <option>Bangladesh</option>
                <option>Bangladesh</option>
                <option>Bangladesh</option>
            </select>
        </div>
        <div>
            <input class="cart_address_shipping_input" placeholder="State" style="margin: 20px 0" type="text">
        </div>
        <div>
            <input class="cart_address_shipping_input" placeholder="Postcode / Zip" style="margin-bottom: 20px"
                   type="number">
        </div>
        <div><a class="button_women" href="#">get a quote</a></div>
    </div>
    <div class="cart_address_coupon cart_address_block">
        <h3>coupon discount</h3>
        <p>Enter your coupon code if you have one</p>

        <div>
            <input class="cart_address_shipping_input" placeholder="State" style="margin: 20px 0" type="text">
        </div>
        <div><a class="button_women" href="#">apply coupon</a></div>

    </div>
    <div class="cart_address_third cart_address_block">
        <div class="cart_address_total">
            <div class="cart_address_total_block">
                <span class="cart_address_total_span">sub total</span>
                <span class="cart_address_total_span">{{getCartData.amount}} &#8381;</span>
            </div>
            <div class="cart_address_grandtotal_block">
                <span class="cart_address_span_grandtotal">grandtotal</span>
                <span class="cart_address_span_grandtotal_dollar">{{getCartData.amount}} &#8381;</span>
            </div>
        </div>
        <div class="cart_address_button"><a class="button_women" href="/checkout">proceed to checkout</a></div>
    </div>
</section>
</div>
</template>

<script>

import cartItemPage from '@/components/cartItemPage.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'shippingCart',
    components: { cartItemPage },
  methods: {
    ...mapActions(['fetchCartData']),
     clear(){
         this.$store.dispatch('clearJson');
         this.$store.state.cartData.contents = []
         this.$store.state.cartData.amount = 0
     },
     remove(item) {
      this.$store.dispatch('deleteJson', {'item': item});
      this.cartItems = this.$store.state.cartData.contents;
      if (item.quantity > 1) {
          item.quantity--;
          this.getCartData.amount = this.getCartData.contents.reduce((accum, item) => accum += item.price * item.quantity, 0);
      } else {
      this.cartItems.splice(this.cartItems.indexOf(item), 1);
    this.getCartData.amount = this.getCartData.contents.reduce((accum, item) => accum += item.price * item.quantity, 0);

      }
    },
  },
  computed: {
    ...mapGetters(['getCartData']),
    
  },
  mounted() {
    this.fetchCartData();
  },
}
</script>