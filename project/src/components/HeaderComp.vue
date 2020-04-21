<template>
<header class="header center">
<div class="header__left">
<a class="logo" href="/">
   <img class="logo__img" src="../img/logo.png" alt="logo">
      <span class="text_shadow">BRAN<div style="position: absolute" class="D bounce-in-bck">D</div>
   </span></a>
   <!-- <search :arrMen="arrMen" :arrWomen="arrWomen" ref="search"/> -->
   <search :arrMen="getArrMen" :arrWomen="getArrWomen" ref="search"/>
</div>
   <cart ref="cart"/>

</header>

</template>

<script>
import search from '@/components/search.vue';
import cart from '@/components/cart.vue';
import { mapActions, mapGetters } from 'vuex';
import test from '@/components/test.vue'

export default {
  name: 'Header',
  data() {
    return {
    };
  },
  components: { search, cart, test },
  methods: {
    ...mapActions(['fetchProdData']),
  },
  computed: {
    ...mapGetters(['getProdData', 'getArrMen', 'getArrWomen']),
  },
  mounted() {
    this.fetchProdData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// h3 {
//   margin: 40px 0 0;
// }
// ul {
//   list-style-type: none;
//   padding: 0;
// }
// li {
//   display: inline-block;
//   margin: 0 10px;
// }
// a {
//   color: #42b983;
// }
</style>
