<template>
  <div class="input-control">
    <label class="input-label" :for="id"><slot></slot></label>
    <input class="input" :id="id" :name="name" :type="type" />
  </div>
</template>

<script>
export default {
  props: ["id", "name", "type"],
};
</script>

<style scoped>
.input-control {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.input-label {
  font-size: 14px;
}

.input {
  border: 1px solid var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 8px;
}
</style>
