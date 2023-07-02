<template>
  <Header :badge="cart.length" />
  <main class="container">
    <h1>Productos</h1>
    <Products :products="products" />
  </main>
</template>

<script>
import Header from "@/components/organismos/v-header.vue";
import Products from "@/components/organismos/v-products.vue";

export default {
  name: "App",
  components: {
    Header,
    Products,
  },
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  methods: {
    print(e) {
      console.log(e);
    },
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

.container {
  padding: 2rem 1rem;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
