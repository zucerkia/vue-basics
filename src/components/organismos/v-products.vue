<template>
  <section class="products">
    <Product
      v-for="(product, index) in products"
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
};
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem 2rem;
}
</style>
