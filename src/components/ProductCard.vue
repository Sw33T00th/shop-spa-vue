<template>
    <div class="col s3">
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <div class="card-image">
              <img :src="product.img" alt="">
          </div>
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {{ product.title | capitalize }}<i class="material-icons right">more_vert</i>
          </span>
          <button @click = "addTo" class = " waves-effect waves-light btn btn-small deep-orange darken-1">
            <i class = "tiny material-icons">add_shopping_cart</i>
          </button>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            {{ product.title | capitalize }}<i class="material-icons right">close</i>
          </span>
          <p>
            Price: {{product.price}}$ Weight: {{product.weight}}g
          </p>
          <p>
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ["product"],
  filters: {
    capitalize(value){
      if (!value) return ''
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods:{
    ...mapActions(['addToCart']),
    addTo(){
      this.addToCart(this.product);
      M.toast({html: 'Added to cart', classes: 'toast'})
    }
  }
};
</script>


<style scoped>
    .card-image {
        height: 150px;
    }

    .toast {
      right: 0;
      bottom: 0;
    }

</style>