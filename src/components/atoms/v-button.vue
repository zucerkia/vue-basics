<template>
  <button
    class="button"
    :class="{ primary: type === 'primary', secondary: type === 'secondary' }"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      default: "primary",
    },
  },
  methods: {
    handleClick(e) {
      return this.$emit("handleClick", e);
    },
  },
};
</script>

<style scoped>
.button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  cursor: pointer;
}

.primary {
  background-color: var(--primary);
  color: var(--white);
}

.secondary {
  background-color: var(--accent);
  color: var(--white);
}
</style>
