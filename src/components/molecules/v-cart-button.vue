<template>
  <button @click="openModal" class="cart-button">
    <Icon class="cart-icon" name="fa-cart-shopping" size="18px" />
    <span class="cart-badge">{{ getCart.length }}</span>
  </button>
  <teleport to="body">
    <Modal :show="showModal" @onClose="closeModal">
      <CartList />
    </Modal>
  </teleport>
</template>

<script>
import Icon from "@/components/atoms/v-icon.vue";
import Modal from "@/components/molecules/v-modal.vue";
import CartList from "@/components/molecules/v-cart-list.vue";

export default {
  components: {
    Icon,
    Modal,
    CartList,
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  inject: ["getCart"],
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
