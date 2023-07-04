<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.toast {
  position: fixed;
  max-width: 300px;
  width: 100%;
  padding: 1rem;
  background-color: var(--tertiary);
  border-radius: 6px;
  border-left: 6px solid var(--primary);
  top: 7rem;
  right: 1rem;
}
</style>
