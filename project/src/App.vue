<template>
  <div id="app">
    <Header/>
    <div id="nav">
         <nav class="nav center">
          <ul class="menu">
            <li class="menu__list menu__link">
              <router-link to="/">Home</router-link>
                <dropdown/>
            </li>
            <li class="menu__list menu__link">
              <router-link to="/men" >Men</router-link>
                <dropdown/>
              </li>
            <li class="menu__list menu__link">
              <router-link to="/women" >Women</router-link>
              <dropdown/>
              </li>
                <li class="menu__list menu__link">
              <router-link to="/women" >Kids</router-link>
              <dropdown/>
              </li>
                <li class="menu__list menu__link">
              <router-link to="/women" >Accoseriese</router-link>
              <dropdown/>
              </li>
                <li class="menu__list menu__link">
              <router-link to="/women" >Featured</router-link>
              <dropdown/>
              </li>
                <li class="menu__list menu__link">
              <router-link to="/women" >Hot Deals</router-link>
              <dropdown/>
              </li>

            <!-- <navdroplistcomp :arrMen="arrMen" :arrWomen="arrWomen" v-if="link.linkName !== 'Home'"></navdroplistcomp> -->
          </ul>

        <!-- <ul class="menu">
         <li class="menu__list" v-for="link of links" :key="link.number"><a :href="link.link" class="menu__link"><router-link to >{{link.linkName}}</router-link></a>
            <navdroplistcomp :arrMen="arrMen" :arrWomen="arrWomen" v-if="link.linkName !== 'Home'"></navdroplistcomp>
         </li>
        </ul> -->
    </nav>
    </div>
    <router-view/>
      <Footer/>
  </div>

</template>

<script>

import dropdown from '@/components/dropDown.vue';
import Header from '@/components/HeaderComp.vue';
import Footer from '@/components/FooterComp.vue';

export default {
  data() {
    return {
         links: [
            {linkName: "Home", link: '#', number: 1},
            {linkName: "Men", link: '/men', number: 2},
            {linkName: "Women", link: '/women', number: 3},
            {linkName: "Kids", link: '#', number: 4},
            {linkName: "Accoseriese", link: '#', number: 5},
            {linkName: "Featured", link: '#', number: 6},
            {linkName: "Hot Deals", link: '#', number: 7},
         ],
    }
  },
  name: 'App',
  components: {
    dropdown, Header, Footer,
  },
};

</script>

<style lang="scss">

// @import './public/style.css';
// .router-link-exact-active {


//   }
// .router-link-active{

//   }
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

#nav {
    color: black;
  a {
    color: black;
    }
}
//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
