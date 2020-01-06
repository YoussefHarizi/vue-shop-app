<template>
  <div class="home">
    <Navbar></Navbar>
    <face></face>
    <products></products>
  </div>
</template>

<script>
import face from "@/components/interface.vue";
import products from "@/sections/products.vue";

export default {
  name: "home",
  components: {
    face,
    products
  }
};
</script>
