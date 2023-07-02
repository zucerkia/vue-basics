<template>
  <header class="header">
    <div class="header-logo">
      <Icon class="header-icon" name="fa-cart-shopping" size="2rem" />
    </div>
    <nav class="header-nav">
      <ul class="header-links">
        <li class="link">
          <a href="#">Sobre nosotros</a>
        </li>
        <li class="link">
          <a href="#">Contactenos</a>
        </li>
      </ul>
      <button class="cart-button">
        <Icon class="cart-icon" name="fa-cart-shopping" size="18px" />
        <span class="cart-badge">{{ badge }}</span>
      </button>
      <Button @handleClick="print('iniciar sesion')"> Iniciar sesion </Button>
      <Button @handleClick="print('registrase')" type="secondary">
        Registrate
      </Button>
    </nav>
  </header>
</template>

<script>
import Button from "@/components/atoms/v-button.vue";
import Icon from "@/components/atoms/v-icon.vue";

export default {
  props: ["badge"],
  components: {
    Button,
    Icon,
  },
  methods: {
    print(e) {
      console.log(e);
    },
  },
};
</script>

<style>
.link {
  color: var(--white);
  font-weight: 600;
}

.cart-button {
  position: relative;
  border: none;
  background: transparent;
}

.cart-icon {
  color: var(--white);
}

.cart-badge {
  position: absolute;
  width: 20px;
  height: 20px;
  display: grid;
  place-content: center;
  top: -10px;
  right: -10px;
  background: var(--white);
  border-radius: 50%;
  border: 1px solid var(--primary);
}
.header {
  background-color: var(--secondary);
  display: flex;
  padding: 0.5rem 3rem;
  justify-content: space-between;
  align-items: center;
  height: 96px;
}

.header-logo {
  width: 4rem;
  height: 4rem;
  display: grid;
  place-content: center;
  background-color: var(--primary);
  padding: 1rem;
  border-radius: 50%;
}

.header-icon {
  color: var(--white);
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
