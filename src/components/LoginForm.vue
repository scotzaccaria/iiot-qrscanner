<template>
  <form @submit.prevent="login">
    <label>
      Email:
      <input type="text" v-model="email" required />
    </label>
    <br />
    <label>
      Password:
      <input type="password" v-model="password" required />
    </label>
    <br />
    <button type="submit">Login</button>
    <p v-if="error" style="color:red">{{ error }}</p>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { Auth } from 'aws-amplify'

const email = ref('')
const password = ref('')
const error = ref('')

const emit = defineEmits(['login-success'])

function login() {
  // Semplice autenticazione mockata
  if (email.value === '1' && password.value === '1') {
    emit('login-success')
  } else {
    error.value = 'Credenziali non valide'
  }
}
</script>
