<template>
      <form class="header__form" action="#">
           <div class="drop__browse">
               <div class="browse box_shadov_click"><a class="text_shadow" href="#">Browse</a></div>
               <div class="drop__browse_block">
                   <div class="drop__flex">
                       <h3 class="drop__h3">Men</h3>
                       <ul class="drop__ul">
                           <li v-for="category of arrMen" v-bind:key="category.category">
                              <a href="#" class="drop__link">{{category.category}}</a>
                              </li>
                       </ul>
                       <h3 class="drop__h3">Women</h3>
                       <ul class="drop__ul">
                           <li v-for ="category of arrWomen" v-bind:key="category.category">
                              <a href="#" class="drop__link">{{category.category}}</a>
                              </li>
                       </ul>
                   </div>
               </div>
           </div>

           <img class="arrow" src="../img/arrow_down.png" alt=">">

           <input v-model="searchItem" class="input" type="text" placeholder="Search for items">
           <a href="#" @click="search">

               <div class="header_button search box_shadow ">
                  <img src="../img/search.png" alt="search">
               </div>
           </a>
       </form>
</template>

<script>
export default {
  data() {
    return {
      searchItem: '',
      searchArr: [],
    };
  },
  name: 'search',
  props: {
    arrMen: Array, arrWomen: Array,
  },
  methods: {
    search() {
      const regExp = new RegExp(this.searchItem, 'i');
      const prodArr = this.$store.state.prodData
      this.searchArr = prodArr.filter(el => regExp.test(el.product_name));
      this.$store.state.filtered = this.searchArr;
console.log(1)
      // this.$store.state.arrMen = this.$store.state.prodData.filter((el) => (el.sex === 'men'));
      const prodArrMen = this.$store.state.arrMen
      this.searchArr = prodArrMen.filter(el => regExp.test(el.product_name));
      this.$store.state.filteredMen = this.searchArr;

      const prodArrWomen = this.$store.state.arrWomen
      this.searchArr = prodArrWomen.filter(el => regExp.test(el.product_name));
      this.$store.state.filteredWomen = this.searchArr;
    },
  },
};
</script>
