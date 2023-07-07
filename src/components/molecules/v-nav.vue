<template>
  <nav class="header-nav">
    <ul class="header-links">
      <li class="link">
        <router-link to="/about">Sobre nosotros</router-link>
      </li>
      <li class="link">
        <router-link to="/contact">Contáctenos</router-link>
      </li>
    </ul>
    <CartButton />
    <div v-if="!getAuth">
      <Button @handleClick="goTo('/auth/login')"> Iniciar sesión </Button>
      <Button @handleClick="goTo('/auth/register')" type="secondary">
        Regístrate
      </Button>
    </div>
    <Button v-else @handleClick="goTo('/dashboard')"> Dashboard </Button>
  </nav>
</template>

<script>
import Button from "@/components/atoms/v-button.vue";
import CartButton from "@/components/molecules/v-cart-button.vue";

export default {
  components: {
    Button,
    CartButton,
  },
  inject: ["getAuth"],
  methods: {
    goTo(url) {
      this.$router.push(url);
    },
  },
};
</script>

<style scoped>
.link {
  color: var(--white);
  font-weight: 600;
}

.header-nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.header-links {
  margin: 0;
  display: flex;
  list-style: none;
  gap: 1rem;
  padding: 0;
}
</style>
