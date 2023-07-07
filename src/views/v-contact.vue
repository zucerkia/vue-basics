<template>
  <BackButton />

  <h1>Contáctenos</h1>
  <form action="">
    <div>
      <label for="name">Nombre</label>
      <input id="name" />
    </div>
  </form>
</template>

<script>
import BackButton from "@/components/atoms/v-back-button.vue";
export default {
  components: {
    BackButton,
  },
};
</script>
