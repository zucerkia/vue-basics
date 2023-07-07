<template>
  <h1>Dashboard</h1>
  <Button @handleClick="logout">Cerrar sesión</Button>
</template>

<script>
import Button from "@/components/atoms/v-button.vue";
export default {
  components: {
    Button,
  },
  methods: {
    logout() {
      localStorage.removeItem("isAuth");
    },
  },
};
</script>
