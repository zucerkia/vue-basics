<template>
  <h1>Registro</h1>
  <form @submit="register" class="form-control">
    <Input id="registerName" type="text" name="fullName">
      Nombre completo
    </Input>
    <Input id="registerEmail" type="email" name="email">
      Correo electrónico
    </Input>
    <Input id="registerPassword" type="password" name="password">
      Contraseña
    </Input>
    <Input id="registerConfirmPassword" type="password" name="confirmPassword">
      Confirma tu contraseña
    </Input>
    <Button> Enviar </Button>
  </form>
  <p class="login">
    ¿Ya tienes una cuenta?
    <router-link to="/auth/login">Inicia sesión</router-link>
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
  methods: {
    register(event) {
      event.preventDefault();
      const registerData = new FormData(event.target).entries();
      const { fullName, email, password, confirmPassword } =
        Object.fromEntries(registerData);

      if (password !== confirmPassword) {
        alert("las contraseñas no coinciden");
        return;
      }

      if (localStorage) {
        const exist = localStorage.getItem(email);

        if (exist) {
          alert(
            "ya existe el usuario, Hubo un error. revisa tu usuario o contraseña"
          );
          return;
        }

        localStorage.setItem(email, JSON.stringify({ fullName, password }));
        localStorage.setItem("isAuth", "true");
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

.login {
  margin-top: 3rem;
}
</style>
