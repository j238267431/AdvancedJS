import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartData: [],
    prodData: [],
    arrMen: [],
    arrWomen: [],
    filtered: [],
    filteredMen: [],
    filteredWomen: [],
  },
  mutations: {
    SET_CART_DATA(state, data) {
      console.log(data);
      // state.cartData = [...data];
      state.cartData = data;
    },
    SET_PROD_DATA(state, data) {
      state.prodData = data;
      state.filtered = data;
    },

  },
  actions: {
    fetchCartData({ commit }) {
      fetch('http://localhost:3030/api/cart')
        .then((response) => response.json())
        .then((data) => {
          commit('SET_CART_DATA', data);
        })
        .catch((err) => {
          console.log(err);
        });
      // commit('SET_CART_DATA', [1, 5, 6]);
    },
    fetchProdData({ commit }) {
      fetch('http://localhost:3030/api/products')
        .then((response) => response.json())
        .then((data) => {
          commit('SET_PROD_DATA', data);
        })
        .catch((err) => {
          console.log(err);
        });
      // commit('SET_CART_DATA', [1, 5, 6]);
    },
    deleteJson(data, item) {
      return fetch('http://localhost:3030/api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item.item),
      }).then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
    clearJson(data) {
      return fetch('http://localhost:3030/api/cart', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([data,'clear']),
      }).then((result) => result.json())
        .catch((error) => {
          this.$refs.error.setError(error);
        });
    },
    postJson(data, dataItem) {
      return fetch('http://localhost:3030/api/cart', {
          method: 'POST',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(dataItem.prod)
      }).then(result => result.json())
        .catch(error => {
            this.$refs.error.setError(error);
        });
  },
  putJson(data, dataItem) {
      return fetch(dataItem.url, {
          method: 'PUT',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(dataItem.prod)
      }).then(result => result.json())
        .catch(error => {
            this.$refs.error.setError(error);
        });
  },
  },
  getters: {
    getCartData(state) {
      return state.cartData;
    },
    getProdData(state) {
      return state.prodData;
    },
    getArrWomen(state) {
      state.arrWomen = state.prodData.filter((el) => (!state.arrWomen.includes(el) && el.sex === 'women'));
      state.filteredWomen = state.prodData.filter((el) => (!state.arrWomen.includes(el) && el.sex === 'women'));
      return state.arrWomen, state.filteredWomen;
    },
    getArrMen(state) {
      state.arrMen = state.prodData.filter((el) => (!state.arrMen.includes(el) && el.sex === 'men'));
      state.filteredMen = state.prodData.filter((el) => (!state.arrMen.includes(el) && el.sex === 'men'));
      return state.filteredMen;
    },
  },
  modules: {

  },
});
