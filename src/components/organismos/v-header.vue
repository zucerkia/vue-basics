<template>
  <header class="header">
    <div class="header-logo">
      <Icon class="header-icon" name="fa-cart-shopping" size="2rem" />
    </div>
    <Nav />
  </header>
</template>

<script>
import Icon from "@/components/atoms/v-icon.vue";
import Nav from "@/components/molecules/v-nav.vue";

export default {
  props: ["badge"],
  components: {
    Icon,
    Nav,
  },
  methods: {
    print(e) {
      console.log(e);
    },
  },
};
</script>

<style>
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
</style>
