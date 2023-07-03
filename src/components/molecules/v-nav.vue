<template>
  <nav class="header-nav">
    <ul class="header-links">
      <li class="link">
        <a href="#">Sobre nosotros</a>
      </li>
      <li class="link">
        <a href="#">Contactenos</a>
      </li>
    </ul>
    <CartButton />
    <Button @handleClick="print('iniciar sesion')"> Iniciar sesion </Button>
    <Button @handleClick="print('registrase')" type="secondary">
      Registrate
    </Button>
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
  methods: {
    print(e) {
      console.log(e);
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
