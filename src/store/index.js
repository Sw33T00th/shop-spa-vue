import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    updateProducts(state, products){
      state.products = products;
    },
    addToCart(state, product){
      const idx = state.cart.indexOf(product);
      
      if( idx != -1){
        state.cart[idx].count++;
        return;
      }
      product.count = 1;
      state.cart.push(product);
    },
    removeFromCart(state,id){
      state.cart = state.cart.filter(p => p.id !== id);
    }
  },
  actions: {
    async fetchData({commit},limit){
      const response = await fetch('https://my-json-server.typicode.com/Sw33T00th/MyJSONServer/products?_limit=' + limit);
      const products = await response.json();
      // console.log(products);
      commit('updateProducts', products);
    },
    addToCart({commit},product){
      // console.log(product);
      commit('addToCart', product)

    },
    removeFromCart({commit}, id){
      commit('removeFromCart',id);
    }
  },
  getters: {
    allProducts(state){
      return state.products;
    },
    productsInCart(state){
      return state.cart;
    }
  },
  modules: {
  }
})
