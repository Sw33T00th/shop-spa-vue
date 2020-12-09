<template>
  <div class="col s12 xl3 l4 m6">
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <div class="card-image">
          <img :src="product.img" alt="" />
        </div>
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          {{ product.title | capitalize
          }}<i class="material-icons right">more_vert</i>
        </span>
        <button
          v-if="!getProductInCartById || getProductInCartById.count === 0"
          @click="addTo"
          class="waves-effect waves-light btn btn-small deep-orange darken-1"
        >
          <i class="tiny material-icons">add_shopping_cart</i>
        </button>
        <div class="arrows" v-else>
          <button @click = "decrement" class="btn btn-small arrow">
            <i class="tiny material-icons">keyboard_arrow_left</i>
          </button>
          <span class="count">{{getProductInCartById.count}}</span>
          <button @click = "increment" class="btn btn-small arrow">
            <i class="tiny material-icons">keyboard_arrow_right</i>
          </button>
        </div>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          {{ product.title | capitalize
          }}<i class="material-icons right">close</i>
        </span>
        <p>Price: {{ product.price }}$ Weight: {{ product.weight }}g</p>
        <p>
          {{ product.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  props: ["product"],
  filters: {
    capitalize(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
  methods: {
    ...mapActions([""]),
    ...mapMutations(['addToCart','incrementCount','decrementCount']),
    addTo() {
      this.addToCart(this.product);
      M.toast({ html: "Added to cart", classes: "toast" });
     
    },
    increment(){
      this.incrementCount(this.product);

    },
    decrement(){
      this.decrementCount(this.product)

    },
  },
  computed: {
    ...mapGetters(["getProductInCart",'getProductCount']),
    getProductInCartById() {
      return this.getProductInCart(this.product.id);
    },
  },
};
</script>


<style scoped>
.card-image {
  height: 150px;
}

.arrows {
  display: flex;
  align-items: stretch;
}

.arrow {
  padding: 0;
  margin: 0;
}

.count {
  padding: 0 10px;
  margin: 0 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  display: flex;
  align-items:center;
}

.toast {
  right: 0;
  bottom: 0;
}
</style>