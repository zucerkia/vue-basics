<template>
  <div v-show="show" class="modal-container">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal">
      <div class="modal-header">
        <Icon icon="fa-xmark" size="18px" @click="close" />
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <Button @handleClick="close"> Aceptar </Button>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/atoms/v-button.vue";
import Icon from "@/components/atoms/v-icon.vue";

export default {
  components: {
    Button,
    Icon,
  },
  methods: {
    close() {
      return this.$emit("onClose");
    },
  },
  props: ["show"],
};
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  width: 100%;
  height: 100%;
  filter: blur(1);
  opacity: 0.3;
  background: gray;
  position: absolute;
}

.modal {
  max-width: 500px;
  width: 100%;
  padding: 1rem;
  z-index: 1;
  background: white;
  gap: 1rem;
  border-radius: 6px;
}

.modal-footer,
.modal-header {
  display: flex;
  justify-content: flex-end;
}
</style>
