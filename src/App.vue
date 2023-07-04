<template>
  <Header :badge="cart.length" />
  <main class="container">
    <h1>Productos</h1>
    <Products :products="products" />
  </main>
  <Toast v-show="showToast">
    <p>Se agregó un elemento al carrito</p>
  </Toast>
</template>

<script>
import Header from "@/components/organismos/v-header.vue";
import Products from "@/components/organismos/v-products.vue";
import Toast from "@/components/atoms/v-toast.vue";
import { computed } from "vue";

export default {
  name: "App",
  components: {
    Header,
    Products,
    Toast,
  },
  provide() {
    return {
      getCart: computed(() => this.cart),
      addToCart: this.addToCart,
    };
  },
  watch: {
    cart() {
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    },
  },
  data() {
    return {
      products: [],
      cart: [],
      showToast: false,
    };
  },
  methods: {
    addToCart(product) {
      const newCart = [...this.cart];
      newCart.push(product);

      this.cart = newCart;
    },
  },
  async created() {
    const response = await fetch("https://dummyjson.com/products");

    if (response.ok) {
      const { products } = await response.json();
      this.products = products;
    }
  },
};
</script>

<style>
:root {
  --primary: #1d3557;
  --secondary: #457b9d;
  --tertiary: #a8dadc;
  --white: #f1faee;
  --accent: #e63946;
}

* {
  box-sizing: inherit;
}

body {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  background-color: var(--white);
  color: var(--primary);
  font-family: Arial, Helvetica, sans-serif;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

a {
  color: inherit;
}

p,
h3 {
  margin: 0;
}

ul {
  padding: 0;
}

.container {
  padding: 2rem 1rem;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
