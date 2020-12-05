<template>
  <nav  class ="blue-grey darken-1">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">My Grocery</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <router-link
        to ="/Products"
        tag="li"
        exact
        active-class="active">
            <a href="#"><i class = "material-icons">kitchen</i></a>
        </router-link>
        <router-link
        to ="/Cart"
        tag="li"
        active-class="active">
            <a href="#"><i class = "material-icons">shopping_cart</i></a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>

    .brand-logo {
        padding: 0 10px;
    }
</style>