<template>
  <div class="home">
    <Navbar></Navbar>
    <face></face>
    <products></products>
    <Login></Login>
  </div>
</template>

<script>
import face from "@/components/interface.vue";
import products from "@/sections/products.vue";
import Login from "@/components/Login.vue";

export default {
  name: "home",
  components: {
    face,
    products,
    Login
  }
};
</script>
