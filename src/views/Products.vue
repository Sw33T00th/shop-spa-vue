<template>
    <div>
        <h1>Products</h1>
        <hr>
        <div class="row">
             <card v-cloak  v-for="product in allProducts" :product = "product" :key = "product.id"/>
        </div>
       

    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import card from '@/components/ProductCard'
export default {
    components: {
        card
    },
    computed: mapGetters(['allProducts']),
   
}
</script>

<style scoped>
  
</style>