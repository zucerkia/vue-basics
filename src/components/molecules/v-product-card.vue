<template>
  <div class="product">
    <div class="product-image">
      <img :src="product.thumbnail" alt="" />
    </div>
    <div class="product-body">
      <div class="product-info">
        <h3>{{ product.title }}</h3>
        <p>
          {{ product.description }}
        </p>
        <span>{{ currency(product.price) }}</span>
      </div>
      <div class="product-footer">
        <Button @handleClick="addToCart(product)">Añadir al carrito</Button>
        <router-link :to="`/product/${product.id}`">Ver mas</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/v-button.vue";
import currency from "@/mixins/currency";

export default {
  components: {
    Button,
  },
  mixins: [currency],
  props: ["product"],
  inject: ["addToCart"],
};
</script>

<style>
.product {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  min-height: 400px;
}

.product-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
}

.product-image {
  width: 100%;
  height: 200px;
}

.product-info {
  display: grid;
  gap: 1rem;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
