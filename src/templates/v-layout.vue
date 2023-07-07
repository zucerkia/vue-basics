<template>
  <Header />
  <main class="container">
    <slot></slot>
  </main>
</template>

<script>
import Header from "@/components/organismos/v-header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
.container {
  padding: 2rem 1rem;
  max-width: 1024px;
  margin: 0 auto;
}
</style>
