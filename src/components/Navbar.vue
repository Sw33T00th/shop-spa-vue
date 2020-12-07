<template>
  <nav class="blue-grey darken-1">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">My Grocery</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link to="/Products" tag="li" exact active-class="active">
          <a href="#"><i class="material-icons">kitchen</i></a>
        </router-link>
        <router-link to="/Cart" tag="li" active-class="active">
          <a href="#"
            ><span v-show="productsInCart.length" class="myCounter"
              ><p>{{ cartTotalCount }}</p></span
            ><i class="cart material-icons">shopping_cart </i></a
          >
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  
  computed: mapGetters(['productsInCart','cartTotalCount']),
 
};
</script>

<style scoped>
.cart {
  position: relative;
}

.myCounter {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 5px;
  bottom: 10px;
  width: 20px;
  font-size: 12px;
  height: 20px;
  border-radius: 100%;
  background-color: #f00;
  color: #fff;
  z-index: 1000;
  text-align: center;
}

.brand-logo {
  padding: 0 10px;
}
</style>