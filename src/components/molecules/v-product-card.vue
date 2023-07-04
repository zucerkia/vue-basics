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
      </div>
      <div class="product-footer">
        <span>{{ currency }}</span>
        <Button @handleClick="addToCart(product)">Añadir al carrito</Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/v-button.vue";
export default {
  components: {
    Button,
  },
  computed: {
    currency() {
      const currency = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      });
      return currency.format(this.product.price);
    },
  },
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
