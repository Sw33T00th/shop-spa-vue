import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      const idx = state.cart.indexOf(product);

      if (idx != -1) {
        state.cart[idx].count++;
        return;
      }
      
      product.count = 1;
      state.cart.push(product);
    },
    removeFromCart(state, id) {
      const removeProduct = state.cart.find(p => p.id === id);
      const removeCount = removeProduct.count;
      state.count -= removeCount;
      state.cart = state.cart.filter((p) => p.id !== id);
    },
    incrementCount(state,product){
      
      const idx = state.cart.indexOf(product);
      state.cart[idx].count++;
    },
    decrementCount(state,product){
      const idx = state.cart.indexOf(product);
      if(state.cart[idx].count === 1 && state.cart[idx]){
        this.commit('removeFromCart',product.id);
        return;
      }
      state.cart[idx].count--;
    },
  },
  actions: {
    async fetchData({ commit }, limit) {
      const response = await fetch(
        "https://my-json-server.typicode.com/Sw33T00th/MyJSONServer/products?_limit=" +
          limit
      );
      const products = await response.json();
      commit("updateProducts", products);
    }
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    productsInCart(state) {
      return state.cart;
    },
    cartTotalSum(state) {
      if (!state.cart.length) {
        return 0;
      }
      return state.cart
        .map((p) => {
          return p.count * p.price;
        })
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });
    },
    cartTotalWeight(state) {
      if (!state.cart.length) {
        return 0;
      }
      return state.cart
        .map((p) => {
          return p.count * p.weight;
        })
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });
    },
    cartTotalCount(state){
      if(!state.cart.length) return;
      return state.cart
        .map((p) => {
          return p.count;
        })
        .reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });
    },
    getProductInCart(state){
      return id => state.cart.find(p => p.id === id);
     
    },
  
  },
  modules: {},
});
