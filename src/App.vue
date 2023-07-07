<template>
  <Layout>
    <router-view />
  </Layout>
  <transition name="fade">
    <Toast v-show="showToast">
      <p>Se agregó un elemento al carrito</p>
    </Toast>
  </transition>
</template>

<script>
import Toast from "@/components/atoms/v-toast.vue";
import Layout from "@/templates/v-layout.vue";

import { computed } from "vue";
export default {
  name: "App",
  components: {
    Toast,
    Layout,
  },
  provide() {
    return {
      getCart: computed(() => this.cart),
      addToCart: this.addToCart,
      getProduct: computed(() => this.products),
      getAuth: computed(() => this.isAuth),
      setAuth: this.setAuth,
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
      isAuth: false,
    };
  },
  methods: {
    setAuth(value) {
      this.isAuth = value;
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

    const isAuth = localStorage.getItem("isAuth");
    if (isAuth) {
      this.isAuth = true;
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  transform: translateX(100%);
}
</style>
