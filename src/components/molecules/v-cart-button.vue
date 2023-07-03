<template>
  <button class="cart-button">
    <Icon class="cart-icon" name="fa-cart-shopping" size="18px" />
    <span class="cart-badge">{{ badge }}</span>
  </button>
</template>

<script>
import Icon from "@/components/atoms/v-icon.vue";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      badge: 0,
    };
  },
};
</script>

<style scoped>
.cart-button {
  position: relative;
  border: none;
  background: transparent;
  cursor: pointer;
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
</style>
