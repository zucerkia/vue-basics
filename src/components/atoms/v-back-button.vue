<template>
  <button class="back" @click="back">
    <Icon name="fa-arrow-left" size="14px" />
    <span>Volver</span>
  </button>
</template>

<script>
import Icon from "@/components/atoms/v-icon.vue";
export default {
  components: {
    Icon,
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.back {
  background: transparent;
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
