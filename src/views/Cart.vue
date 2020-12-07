<template>
  <div>
    <h1>Cart</h1>
    <hr />
    <div v-if="productsInCart.length" class="row">
      <div class="col s9">
        <div v-for = "product in productsInCart" :key = "product.id" class="section">
          <h5>{{product.title | capitalize}}</h5>
          <span class = "price">
            {{product.count * product.price}}$
          </span>
          <span>
              <i @click = "remove(product.id)" class=" remove material-icons right">close</i>
          </span>
          <p><strong>{{product.count}}</strong>pcs({{product.count * product.weight}}g)</p>

          <div class="divider"></div>
        </div>
      </div>
      <div class="col s3 checkout">
          <div class="row">
            <p>
                You have {{cartTotalCount}} items ({{cartTotalWeight}}g)
            </p>
            <div class="divider"></div>
            <h3>Total: {{cartTotalSum}}$</h3>
            <button class = "col s12 btn btn-large deep-orange darken-1">Checkout</button>
          </div>
          
      </div>
    </div>
    <div v-else>
      <h2 class="center-align">Cart is empty</h2>
      <div class="row">
        <router-link
          class="col s6 offset-s3 center-align btn btn-large deep-orange darken-1"
          to="/products"
        >
          Put in it something from here
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
    methods: {
        ...mapMutations(['removeFromCart']),
        remove(id){
            this.removeFromCart(id);
        }
    },
    computed: {
        ...mapGetters(['productsInCart','cartTotalSum','cartTotalWeight','cartTotalCount']),
    },
    filters: {
    capitalize(value){
      if (!value) return ''
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
};
</script>

<style scoped>
    .remove {
        cursor: pointer;
    }

    .price {
      font-size: 20px;
    }
</style>