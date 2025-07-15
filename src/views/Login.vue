<!--<template>
  <div class="login-page">
    <h1>Login</h1>
    <LoginForm @login-success="handleLoginSuccess" />
  </div>
</template>

<script setup>
import LoginForm from '../components/LoginForm.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function handleLoginSuccess() {
    console.log('Login successful')
  router.push('/home')
}
</script>
-->

<template>
  <div class="login-page">
    <h1>Login</h1>
    <button id="signIn" @click="handleLogin">Sign In</button>
  </div>
</template>

<script setup>
import { userManager } from '../auth';

async function handleLogin() {
  await userManager.signinRedirect();
}

</script>