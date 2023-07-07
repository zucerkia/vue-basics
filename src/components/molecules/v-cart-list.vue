<template>
  <div class="cart">
    <h2>Mi Carrito</h2>
    <div v-if="getCart.length === 0">
      <h3>No hay elementos en el carrito</h3>
    </div>
    <ul class="cart-list">
      <li v-for="(item, index) in getCart" :key="index" class="cart-item">
        <p>{{ item.title }}</p>
        <span>{{ currency(item.price) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import currency from "@/mixins/currency";

export default {
  inject: ["getCart"],
  mixins: [currency],
};
</script>

<style scoped>
.cart {
  margin: 2rem;
}
.cart-list {
  display: grid;
  gap: 8px;
}
.cart-item {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
</style>
