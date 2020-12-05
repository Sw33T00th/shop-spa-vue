<template>
  <div id = "app">
    <navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import navbar from '@/components/Navbar'
export default {
  components: {
    navbar
  },
   methods: mapActions(['fetchData']),
   async created(){
        this.fetchData(5);
  }
  
}
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";

    body {
      background-color: #90caf9;
    }

    hr,.divider {
          background-color: #444;
          border-color: #444;
      }

   .link {
    color:#fff;
    font-size: 24px;
  }
</style>
