<template>
  <div>
      <h1 class = "center-align">Welcome!</h1>
      <h2 class = "center-align">Here you can buy some tasty stuff </h2>
      <div class="row">
        <div class = "col s6 offset-s3">
          <router-link class = "col s5 center-align btn btn-large deep-orange darken-1" to='/products'>Look at stuff</router-link>
          <router-link class = "col s5 offset-s2 center-align btn btn-large deep-orange darken-1" to='/cart'>checkout</router-link>
        </div>  
      </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style scoped>
  .row {
    margin: 80px 0px 0px 0px;
  }
</style>
