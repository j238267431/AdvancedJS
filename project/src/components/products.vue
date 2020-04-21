<template>
  <section ref="test" class="product-box center">
    <product
      v-for="item of $store.state.filtered"
      :key="item.id_product"
      :product="item"
      @add="add"
    ></product>
  </section>
</template>


<script>
import product from "@/components/product.vue";

export default {
  data() {
    return {};
  },
  name: "products",
  components: { product },
  methods: {
    add(item) {
      //  console.log(item)
      let find = this.$store.state.cartData.contents.find(
        el => el.id_product === item.id_product
      );
      if (find) {
        this.$store.dispatch("putJson", {'prod': item, 'url': `http://localhost:3030/api/cart/${find.id_product}`})
        find.quantity++;

      } else {
        let prod = Object.assign({ quantity: 1 }, item);
        this.$store.dispatch("postJson", {'prod': prod, 'url': `http://localhost:3030/api/cart`})
        this.$store.state.cartData.contents.push(prod);

      }
      
    }
  },
  
};
</script>