<template>
  <section class="products">
    <Product
      v-for="(product, index) in getProduct"
      :key="index"
      :product="product"
    />
  </section>
</template>

<script>
import Product from "@/components/molecules/v-product-card.vue";

export default {
  components: {
    Product,
  },
  props: ["products"],
  inject: ["getProduct"],
};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem 2rem;
}
</style>
