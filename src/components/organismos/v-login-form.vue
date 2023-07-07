<template>
  <h1>Iniciar sesión</h1>
  <form @submit="login" action="" class="form-control">
    <Input id="registerEmail" type="email" name="email">
      Correo electrónico
    </Input>
    <Input id="registerPassword" type="password" name="password">
      Contraseña
    </Input>
    <Button> Enviar </Button>
  </form>
  <p class="register">
    ¿no tienes una cuenta?
    <router-link to="/auth/register">Regístrate</router-link>
  </p>
</template>

<script>
import Input from "@/components/atoms/v-input.vue";
import Button from "@/components/atoms/v-button.vue";

export default {
  components: {
    Input,
    Button,
  },
  inject: ["setAuth"],
  methods: {
    login(event) {
      event.preventDefault();
      const loginData = new FormData(event.target).entries();
      const { email, password } = Object.fromEntries(loginData);

      if (localStorage) {
        const user = JSON.parse(localStorage.getItem(email));

        if (!user) {
          alert("no hay usuario registrado con este email");
          return;
        }

        if (password !== user.password) {
          alert("la contraseña no es correcta");
          return;
        }

        localStorage.setItem("isAuth", "true");
        this.setAuth(true);
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>

<style scoped>
.form-control {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.register {
  margin-top: 3rem;
}
</style>
